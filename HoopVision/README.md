# [HoopVision](https://github.com/yashkukrecha/fantasy-basketball-app)

## Overview
HoopVision is a fantasy basketball application designed to simulate a 5-stage NBA draft and predict player performance for the upcoming season. Users can draft their teams, receive statistical predictions for their players, and evaluate their team's success.

## Features
* **NBA Draft Simulation**: The K-Means clustering model simulates a 5-stage NBA draft class. Using the elbow method to define an appropriate number of clusters,
the model grouped players based on their statics, creating realistic draft classes for users to select from.

![image](https://github.com/user-attachments/assets/0e77f11b-4d2f-48e1-a1d2-74044f3f93e1)

![image](https://github.com/user-attachments/assets/a6f5e062-36a2-4465-a3fd-087e4674788f)

* **Performance Prediction**: The ExtraTreesRegressor model predicts future statistics for each player, including points per game, assists per game, rebounds per game, and games played, with a mean-squared error of 0.4547. This relatively low mean-squared error means the
the model accurately predicts future averages for each player.

![image](https://github.com/user-attachments/assets/be33dedc-458a-46e4-b6f0-80b5554d12ba)

*Heatmap showing correlation between features*

![image](https://github.com/user-attachments/assets/c9a11af1-193b-417e-8fd7-58bf21893e04)

*Model predictions*

* **User and Data Management**: HoopVision includes robust user authentication and relational database management features. The application has three databases: users, players, and drafts. User data includes their user ID, username, password, profile picture, and drafts. 
The profile pictures are stored in a bucket using Firebase Storage. Player data includes a player ID, basic player information, statistics from the previous season, and predictions for the upcoming NBA season. Lastly, draft data consists of the draft ID,
user ID, five player IDs, and the success level for the draft.

* **Interactive Frontend**: Provides a fully functioning and minimalistic React frontend for an intuitive user experience. Users can easily navigate through the application, draft their teams, view player predictions, and edit their profile.

![image](https://github.com/user-attachments/assets/0d8e5e4d-3643-4ab8-ac50-f9d74627f0aa)

![image](https://github.com/user-attachments/assets/774bbe74-362c-46bf-bd79-4603f12ee71c)

![image](https://github.com/user-attachments/assets/784993a1-8e9c-4267-bb99-896cb7fb6f6e)

![image](https://github.com/user-attachments/assets/ca621493-5d7c-4f51-9f2f-a8c901646d75)

![image](https://github.com/user-attachments/assets/0f3786ca-8a6f-4824-8cc7-452606bc0154)

![image](https://github.com/user-attachments/assets/6d452959-5b77-4afc-9697-afc78890d4da)

## Technologies Used
* **Backend**: Flask
* **Frontend**: React.js, Chart.js
* **Machine Learning**: Sci-Kit Learn, Pandas, Seaborn, Matplotlib
* **Database and Storage**: SQLAlchemy, Firebase Storage

## Future Enhancements to HoopVision
* **Real-Time Updates**: By implementing real-time updates for player statistics and injury reports, users would have the most current information to make informed decisions for their draft.
* **Advanced Player Metrics**: Integrating advanced player metrics like Player Efficiency Rating (PER), defensive statistics such as blocks and steals, and win shares would provide deeper insights into player performance and potential.
* **Machine Learning Finetuning**: HoopVision can continue to improve its machine learning models by using more data sources, experimenting with various algorithms, and incorporating more complex feature engineering to increase prediction accuracy. 

## Future Applications
There are several future applications of HoopVision. Below, I've highlighted two that I believe could be greatly beneficial.
* **Player Tracking and Analysis**: Finetuning machine learning models, such as the ones I implemented in this project, would allow NBA teams and players to better track and predict player development over time. This could aid teams in making informed decisions
about player training, contract negotiations, and scouting reports/draft analysis to find potential sleeper picks, low-risk players, and vital role players for their roster. Instead of a season-to-season basis, models could be trained on a day-to-day or month-to-month
basis to predict player trajectory in the short run.
* **Integration With Sports Betting Platforms**: Using predictive machine learning can provide insights for sports bettors, offering users predictions on game outcomes, player performance, and other viable betting options. Sports betting platforms could integrate
historical betting data with current player trends to suggest optimal betting strategies and improve user success rates.

Unfortunately, I was unable to host this application due to hosting costs.

Contact: ykukrecha@gmail.com
