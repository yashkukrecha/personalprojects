import streamlit as st
#import pickle

import pandas as pd
import numpy as np
#import seaborn as sns
#import matplotlib.pyplot as plt
#import matplotlib.gridspec as gridspec
#import joblib
import tensorflow as tf
from PIL import Image
from io import BytesIO
#for data preprocessing
from sklearn.decomposition import PCA

#for modeling
#from sklearn.neighbors import LocalOutlierFactor
#from sklearn.ensemble import IsolationForest

#filter warnings
import warnings

from components.sidebar import sidebar
from components.uploadData import dataTab
from components.medical_bill_fraud_detection import preprocessing, removeComma
#from joblib import load

#with open('components/classifier.pkl', 'rb') as file:
#    ae = pickle.load(file)

#ae = joblib.load("components/classifier.pkl")
#ae = ML()
ae = tf.keras.models.load_model("components/path_to_saved_model")


#y_scores = pd.Series(ae.decision_scores_)
risk = 0
st.set_page_config(page_title="MediGuard", page_icon="📖", layout="wide")
st.markdown("<h1 style='text-align: center;'>📖 MediGuard</h1>", unsafe_allow_html=True)

provider_first, provider_last, submitted_charge, has_med, med_payment = dataTab()
sidebar()

with open("form_submit_state.txt", "r") as file:
    form_submit_state = file.read()

def runModel(ae, pF, pL, sC, hM, mP):
    raw_data = pd.read_csv("components/Healthcare Providers.csv")
    data_processed = pd.read_csv("components/Healthcare Providers.csv")
    data_processed = preprocessing(data_processed)
    reconstructions = ae.predict(tf.constant(data_processed))
    
    train_loss = tf.keras.losses.mae(reconstructions, data_processed)
    threshold = np.mean(train_loss) + (np.std(train_loss))

    # user input

    provider_first = str(pF)
    provider_last = str(pL)
    submitted_charge = float(sC)
    if hM:
        med_payment = float(mP)
    else:
        med_payment = 0

    # find the row data of the provider
    row = raw_data.loc[(raw_data['Last Name/Organization Name of the Provider'] == provider_last)
                & (raw_data['First Name of the Provider'] == provider_first)].copy()

    # find the row index of the provider
    row_index = raw_data.index[(raw_data['Last Name/Organization Name of the Provider'] == provider_last)
                & (raw_data['First Name of the Provider'] == provider_first)][0]

    # save the old score before finding the new one
    old_score = train_loss[None, row_index]
    old_score = old_score.numpy()[0]

    # update the row
    #row['Number of Services'] = str(int(row['Number of Services']) + 1)
    row['Number of Services'].iloc[0] = str(int(row['Number of Services'].iloc[0]) + 1)

    if (hM == 1):
        row['Average Medicare Payment Amount'].iloc[0] = str((float(row['Average Medicare Payment Amount'].iloc[0]) * int(row['Number of Medicare Beneficiaries'].iloc[0]) + med_payment) / (int(row['Number of Medicare Beneficiaries'].iloc[0]) + 1))
        row['Number of Medicare Beneficiaries'] = str(int(row['Number of Medicare Beneficiaries']) + 1)
    row['Average Submitted Charge Amount'].iloc[0] = str((float(row['Average Submitted Charge Amount'].iloc[0]) * (int(row['Number of Services'].iloc[0]) - 1) + submitted_charge) / int(row['Number of Services'].iloc[0]))

    temp_data = pd.concat([row,raw_data], ignore_index=True)

    temp_data = preprocessing(temp_data)

    #temp_data.head()

    temp_row = temp_data.iloc[0,:]
    temp_row = temp_row.to_numpy()
    temp_row = temp_row[np.newaxis, :]

    train_loss = tf.keras.losses.mae(ae.predict(temp_row), temp_row)

    new_score = train_loss.numpy()[0]
    new_score = new_score - 0.175

    result = ae.predict(temp_row)
    print(new_score)
    print(old_score)
    print(result)

    if (new_score > old_score and new_score >= threshold):
        return 2 #High Risk
    elif (new_score > old_score and new_score < threshold or new_score < old_score and new_score >= threshold):
        return 1
    else:
        return 0 #Low Risk

def email():
    # Input for recipient's name
    with st.form("Email Response"):
        st.write("Email Response")
        recipient_name = st.text_input("Recipient's Name: ")
        hospital_name = st.text_input("Hospital/Clinic Name: ")
        date_of_service = st.text_input("Date of Service: ")
        first_error = st.text_input("Description of the first error: ")
        second_error = st.text_input("Description of the second error (optional): ")
        additional_errors = st.text_input("Description of additional errors (if applicable, optional): ")
        your_name = st.text_input("Your Name: ")
        your_address = st.text_input("Your Address: ")
        city_state_zip = st.text_input("City, State, ZIP Code: ")
        your_phone_number = st.text_input("Your Phone Number: ")
        your_email_address = st.text_input("Your Email Address: ")
        submit_button = st.form_submit_button(label="Submit")
    if submit_button:
        email = st.text_area("Subject: Request for Compensation Due to Error in Medical Bill\n\n",
                    "Dear " + recipient_name + ",\n\n",
                    "I hope this email finds you well. I am writing to bring to your attention an issue I have encountered with my recent medical bill from " + hospital_name + ", and I kindly request compensation for the error that has occurred.\n\n"
                    "On " + date_of_service + ", I received a bill for the medical services I received on " + date_of_service + ". Upon reviewing the bill, I noticed a significant error in the charges. The services listed and the corresponding costs do not accurately reflect the treatment I received. Specifically, the following discrepancies were identified:\n\n"
                    "1. " + first_error + "\n\n"
                    + ("2. " + second_error + "\n\n" if second_error else "")
                    + ("3. " + additional_errors + "\n\n" if additional_errors else "")
                    +
                    "I believe this is a result of a billing error, as I received the correct treatment during my visit to " + hospital_name + ". To address this issue, I kindly request that the following actions be taken:\n\n"
                    "1. A thorough review of the billing records to rectify the inaccuracies mentioned above.\n\n"
                    "2. An adjustment of the bill to reflect the accurate charges based on the treatment I received.\n\n"
                    "3. A refund or credit for any overpayment made as a result of these errors.\n\n"
                    "I understand that mistakes can happen, but I trust that " + hospital_name + " will take the necessary steps to resolve this matter promptly and efficiently. I have always been a satisfied and loyal patient of your facility, and I hope to continue this positive relationship.\n\n"
                    "To facilitate the process, I have attached copies of the relevant documents, including the incorrect bill and any supporting documentation that may be required. If you need any further information or clarification, please do not hesitate to contact me at " + your_phone_number + " or via email at " + your_email_address + ".\n\n"
                    "I kindly request that you acknowledge receipt of this email and provide a timeframe for resolution. I believe that resolving this matter swiftly is in the best interest of both parties.\n\n"
                    "I appreciate your prompt attention to this issue and look forward to a quick and fair resolution. Thank you for your cooperation and understanding in this matter.\n\n"
                    "Sincerely,\n\n"
                    + your_name + "\n"
                    + your_address + "\n"
                    + city_state_zip + "\n"
                    + your_phone_number + "\n"
                    + your_email_address)
        st.write(email)
                    

if form_submit_state == "pressed":
    with open("form_submit_state.txt", "w") as file:
        pass
    risk = runModel(ae, provider_first, provider_last, submitted_charge, has_med, med_payment)
    if (risk == 0):
        st.warning(
            "Low risk of fraud or error detected in the medical bill :)"
        )
        print("Low risk of fraud or error detected in the medical bill :)")
    if (risk == 1): 
        st.warning(
            "Potential risk of fraud or error detected in the medical bill."
        )
        print("Potential risk of fraud or error detected in the medical bill.")
        email()
    if (risk == 2):
        st.warning(
            "High risk of fraud or error detected in the medical bill."
        )
        print("High risk of fraud or error detected in the medical bill.")
        email()
    
