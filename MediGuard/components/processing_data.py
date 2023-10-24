# -*- coding: utf-8 -*-
import pandas as pd

import category_encoders as ce
from sklearn.preprocessing import StandardScaler

#filter warnings
import warnings

def preprocessing(data):

  # remove unnecessary columns
  drop_cols = ['index', 'National Provider Identifier', 'Last Name/Organization Name of the Provider',
      'First Name of the Provider', 'Middle Initial of the Provider','Street Address 1 of the Provider',
      'Street Address 2 of the Provider','Zip Code of the Provider',"HCPCS Code"]

  data = data.drop(drop_cols, axis = 1)

  # clean the data, make it look nicer
  cleanse = ["Average Medicare Allowed Amount", "Average Submitted Charge Amount", "Average Medicare Payment Amount", "Average Medicare Standardized Amount"]

  for col in cleanse:
    data[col] = pd.to_numeric(data[col].apply(lambda x : removeComma(str(x))), errors="ignore")

  missing_cols = ['Credentials of the Provider', 'Gender of the Provider']
  # replaces null or missing values with the first mode found
  for col in missing_cols:
    data[col] = data[col].fillna(data[col].mode()[0])

  # binary encoding
  # binary value of a categorical datatype is split into columns
  be_cols = [var for var in data.columns if data[var].dtype == "O"]

  # removes the original column and instead adds the binary encodded columns
  for col in be_cols:
    encoder = ce.BinaryEncoder(cols = [col])
    databin = encoder.fit_transform(data[col])
    data = pd.concat([data, databin], axis = 1)
    del data[col]

  # standardization
  data_cols = data.columns
  std = StandardScaler()
  data = std.fit_transform(data)
  data = pd.DataFrame(data, columns = data_cols)

  return data

def removeComma(x):
  return x.replace(",", "")

 

