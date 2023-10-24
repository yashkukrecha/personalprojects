# Files Within "components" Directory
## Healthcare Providers.csv
Contains the dataset used for building the model. Includes information such as the provider's name, average dollar amount of Medicare allowed, average dollar amount paid, etc

## processing_data.py
Processes the raw dataset by cleaning the numbers, dropping unnecessary columns, binary encoding the data, and standardizing the values between -1 and 1 

## model_filename.pkl
Contains the saved AutoEncoder model

## sidebar.py
Contains the code for the instructions on the left-hand side of the website page

## uploadData.py
Takes the user-inputted medical invoice and reads it into viable information for the model
