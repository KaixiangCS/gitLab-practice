import android_logo from './download.png';
import django_logo from './django.png';
import spring_logo from './spring.png';
const reviews = [
  {
    id: 1,
    name: 'Android Application',
    job: 'Java; Android Studio',
    image:
      android_logo,
    text:
    "Cooperate with several teammates to work on an Android application as a group. The main functionalities is that when you log in as a customer account then you are able to submit a trip request that is automatically sent to a driver who logs in as a driver account near to you, alerting you when the driver is arriving. I was in charge of implementing specific features for example uploading images, implementing elasticsearch to store information and implementing unit tests.",
  },
  {
    id: 2,
    name: 'Twitter-like social network web application',
    job: 'Python; SQLite; Django',
    image:
      django_logo,
    text:
    "Cooperate with several teammates to work on an webpage application as a group. Developed a social network which the clients can make posts of their daily activities, see other’s posts, make comments on other’s posts and make friends with each other. I was in charge of establishing the corresponding database and developing most parts of the backend using Django and SQLite. For instance, I developed the backend logic which is the visibility of the posts. For example, a user can set the post as only visible by himself or visible by their friends or visible by the public. Same logic also applies to the comments section. Finally I implemented an automation test to test all functionalities of the application.",
  },
  {
    id: 3,
    name: 'Commercial Webpage Application',
    job: 'Java; MySQL; Spring Boot',
    image:
      spring_logo,
    text:
    "Cooperate with several teammates to work on a webpage application as a group. Developed a complicated questionnaire website which the customers can easily apply for event insurance by filling all the questions. Then the website will evaluate the customers by the answers they presented and provide a quote to the customers. I was in charge of establishing the database, developing some of the backend APIs, some of the specific features and testing. For example: initialize the tables and deploy the database to the server, implement backend APIs to connect to the frontend , generate a pdf file as invoice or the record of any orders made by customer then send it to the customer through the confirmation email and implement integration test to test each of my controllers.",
  }
];

export default reviews;
