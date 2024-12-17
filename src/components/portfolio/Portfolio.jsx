import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Instagram Clone",
    img: "./insta.png",
    link: "https://arjit-post-app.vercel.app",
  },
  {
    id: 2,
    title: "Chat App",
    img: "./chat.png",
    link: "https://chat-app-ar-c43d1.web.app",
  },
  {
    id: 3,
    title: "Netflix Clone",
    img: "./netflix.png",
    link: "https://netflix-clone-af892.web.app",
  },
  {
    id: 4,
    title: "Gmail",
    img: "./gmail.png",
    link: "https://clone-42724.web.app",
  },
  {
    id: 5,
    title: "YouTube Clone",
    img: "./youtube2.png",
    link: "https://arjit-streaming.vercel.app",
  },
];

const descriptions = {
  1: (
    <div>
      <h3>Overview:</h3>
      <p>
        Dive into a fully functional Instagram clone built with React and
        Firebase, designed to provide an immersive social media experience. This
        project showcases a blend of modern web development techniques and best
        practices.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>
          <strong>User Authentication:</strong> Securely log in or sign up to
          access all features. Authenticaton is built using{" "}
          <strong>Firebase authentication.</strong> Enjoy a seamless onboarding
          process that ensures your account is safe and your data is protected.
        </li>
        <li>
          <strong>Profile Customization:</strong> Personalize your experience by
          uploading a profile picture and updating your username and bio. Show
          off your unique identity to your followers! All your data will store
          in <strong>Firebase Database.</strong>
        </li>
        <li>
          <strong>Dynamic Posting:</strong> Share your moments with the world!
          Easily upload photos to create posts that your friends and followers
          can engage with.
        </li>
        <li>
          <strong>Engagement Options:</strong> Interact with your favorite posts
          by liking them and leaving comments. Join the conversation and connect
          with the community!
        </li>
        <li>
          <strong>Follow/Unfollow Users:</strong> Build your social network by
          following other authenticated users. Stay updated on their posts and
          activities, or choose to unfollow whenever you want.
        </li>
        <li>
          A real-time interaction feature for an Instagram clone, enabling
          instant updates to user profiles for actions such as post
          uploads/deletions, follower/following changes & likes and comments.
        </li>
        <li>
          <strong>State Management:</strong> Leveraging the Zustand library for
          efficient state management ensures a smooth and responsive user
          interface.
        </li>
        <li>
          <strong>Styling with Chakra UI:</strong> The clean and modern design,
          crafted with Chakra UI, enhances user experience and accessibility,
          making navigation intuitive and enjoyable.
        </li>
        <li>
          <strong>Responsive Design:</strong> Whether on a desktop or mobile
          device, enjoy a fully responsive layout that adapts to your screen
          size for a seamless experience.
        </li>
      </ul>
      <h3>Conclusion:</h3>
      <p>
        This Instagram clone is more than just a project; it's a testament to my
        skills in full-stack development. With its robust features and
        user-friendly design, it reflects my passion for creating engaging web
        applications. Whether you're looking to connect with friends or share
        your latest adventures, this clone offers a glimpse into the future of
        social media!
      </p>
    </div>
  ),
  2: (
    <div>
      <h3>Overview:</h3>
      <p>
        Welcome to the Chat App, a fully-fledged real-time messaging platform
        that connects authenticated users in a seamless and interactive
        environment. Built with React.js and Firebase, this application is
        designed to bring friends and family closer, allowing for dynamic
        conversations and engagement.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>
          <strong>User Authentication:</strong> Get started by logging in or
          signing up with an easy-to-use interface. Creating your account is
          just a click away!
        </li>
        <li>
          <strong>Profile Management:</strong> Update your profile effortlessly.
          With just a few taps, you can change your profile image, username, and
          bio, making your chat experience uniquely yours.
        </li>
        <li>
          <strong>Friends List:</strong> Easily connect with other authenticated
          users. Search for friends and add them to your list to initiate
          conversations!
        </li>
        <li>
          <strong>Real-Time Messaging:</strong> Open chats with your friends and
          enjoy real-time messaging. Send text, emojis, or even images to
          express yourself fully.
        </li>
        <li>
          <strong>Voice Messaging:</strong> Prefer speaking over typing? Use the
          microphone icon to send voice messages, adding a personal touch to
          your conversations!
        </li>
        <li>
          <strong>Online Presence Indicators:</strong> Know when your friends
          are available! A green dot beside their name indicates they are
          online, while the dot disappears after one minute of inactivity.
        </li>
        <li>
          <strong>Intuitive Chat Interface:</strong> The right side of the chat
          screen showcases the profile picture, name, and bio of the person
          you're chatting with, along with a gallery of shared images.
        </li>
        <li>
          <strong>Responsive Design:</strong> Whether on a desktop or mobile
          device, enjoy a fully responsive layout that adapts to your screen
          size for a seamless experience.
        </li>
        <li>
          <strong>Password Recovery:</strong> Forgot your password? No worries!
          Click on "Forgot Password" in the login form to reset it easily by
          providing your email.
        </li>
      </ul>
      <h3>How to Use:</h3>
      <p>
        To dive into the action, simply search for the username "test user" in
        the friends list and start sending messages, voice notes, or images.
        Experience the joy of communication and stay connected with your circle,
        all while your chat data is securely stored in Firebase.
      </p>
      <h3>Conclusion:</h3>
      <p>
        This Chat App is more than just a messaging platform; it's a testament
        to my skills in full-stack development. With its modern design and
        engaging features, it reflects my commitment to creating impactful web
        applications that foster connectivity. Join the conversation and
        experience the future of messaging!
      </p>
    </div>
  ),
  3: (
    <div>
      <h3>Overview:</h3>
      <p>
        Welcome to the ultimate movie experience! Dive into a stunning Netflix
        clone crafted with React and Firebase, where your favorite films and
        shows come to life right before your eyes. This project isn't just a
        clone; it's a gateway to an immersive world of entertainment, bringing
        the magic of streaming to your fingertips.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>
          <strong>User Authentication:</strong> Begin your cinematic journey
          with secure login or signup through Firebase Authentication. Enjoy a
          personalized experience tailored just for you!
        </li>
        <li>
          <strong>Trailer Access:</strong> Feel the excitement as you click the
          play button to watch trailers of the selected movies! For adult-rated
          films, we've got you covered by keeping their trailer as not
          available.
        </li>
        <li>
          <strong>Dynamic Content Sections:</strong> Explore curated categories
          like TV Shows, Movies, and New & Popular, all featuring infinite
          scrolling to keep you glued to your screen!
        </li>
        <li>
          <strong>Instant Search Functionality:</strong> Unleash your inner film
          buff with a powerful search feature that lets you find your favorite
          movies and shows in a flash. Type in a title and watch the magic
          happen!
        </li>
        <li>
          <strong>Stunning UI/UX Design:</strong> Immerse yourself in a
          beautifully designed user interface that mirrors the elegance of
          Netflix, making your browsing experience smooth and visually
          captivating.
        </li>
        <li>
          <strong>Responsive Design:</strong> Whether on a desktop or mobile
          device, enjoy a fully responsive layout that adapts to your screen
          size for a seamless experience.
        </li>
        <li>
          <strong>Rich Movie Details:</strong> Dive deep into every title with
          comprehensive details, including IMDB ratings, cast information, and
          directors. Click on your favorite actor's photo to explore their
          cinematic journey!
        </li>
        <li>
          <strong>Real-Time Data from TMDB API:</strong> Get ready for an
          extensive library of content! With data sourced from The Movie
          Database (TMDB) API, enjoy seamless access to genres ranging from
          Netflix Originals to Action and Comedy.
        </li>
      </ul>
      <h3>Conclusion:</h3>
      <p>
        This Netflix clone isn't just a project; it's a showcase of my
        dedication to delivering exceptional user experiences in web
        development. With its robust features and stunning design, it's a
        perfect platform for movie lovers everywhere. Whether you’re looking to
        binge-watch your favorite series or discover new films, this clone
        captures the essence of modern streaming entertainment!
      </p>
    </div>
  ),
  4: (
    <div>
      <h3>Overview:</h3>
      <p>
        Dive into the world of emails with my fully functional Gmail Clone,
        crafted using React.js, Firebase, and Tailwind CSS. This project not
        only mirrors the core functionalities of Gmail but also introduces a
        sleek, modern interface enhanced by beautiful animations using Framer
        Motion.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>
          <strong>Google Authentication:</strong> Seamlessly log in using your
          Google account with Firebase authentication. Your profile picture will
          appear on the right, making your experience personalized and secure!
        </li>
        <li>
          <strong>Intuitive Mail Management:</strong> Effortlessly compose,
          send, and delete emails to authenticated users. Enjoy a familiar Gmail
          experience right at your fingertips!
        </li>
        <li>
          <strong>Responsive Design:</strong> Whether on a mobile device or
          desktop, this clone adapts perfectly to your screen, ensuring a smooth
          user experience.
        </li>
        <li>
          <strong>Animation Effects:</strong> Experience delightful transitions
          and animations when composing or opening emails, mimicking the
          fluidity of the original Gmail interface, powered by Framer Motion.
        </li>
        <li>
          <strong>Efficient Email Sorting:</strong> Your inbox is organized
          chronologically, with the most recent emails appearing at the top,
          allowing for easy navigation and management.
        </li>
        <li>
          <strong>Search Functionality:</strong> Quickly find emails by
          searching for authenticated users’ names, whether in lowercase or
          uppercase. Your emails are just a search away!
        </li>
        <li>
          <strong>State Management:</strong> All state management is handled
          with React Redux Toolkit, ensuring a robust and efficient application
          flow.
        </li>
        <li>
          <strong>Secure Storage:</strong> All emails are securely stored in
          Firebase, providing peace of mind for your data privacy.
        </li>
        <li>
          <strong>Easy Logout:</strong> Log out effortlessly by clicking on your
          account, ensuring a secure exit from your session.
        </li>
      </ul>
      <h3>Conclusion:</h3>
      <p>
        This Gmail Clone isn’t just a project; it’s a showcase of my skills in
        full-stack development and UI design. With its powerful features and
        responsive design, it reflects my commitment to creating engaging web
        applications. Experience the convenience of email communication with a
        touch of modern elegance!
      </p>
    </div>
  ),
  5: (
    <div>
      <h3>Overview:</h3>
      <p>
        Experience the world of video streaming with my fully functional YouTube
        Clone, built using React. This project mimics the iconic layout and
        features of YouTube while adding modern enhancements for an intuitive
        user experience.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>
          <strong>Dynamic Header:</strong> Easily search for any video, song, or
          content with a robust search functionality, including a convenient
          voice search option to find your favorites effortlessly.
        </li>
        <li>
          <strong>Light and Dark Modes:</strong> Toggle between light mode and
          dark mode with a simple button, allowing users to customize their
          viewing experience based on their preferences.
        </li>
        <li>
          <strong>Interactive Sidebar:</strong> Explore various categories such
          as Music, Gaming, Comedy, and Entertainment with a dedicated sidebar
          that makes navigating through content a breeze.
        </li>
        <li>
          <strong>Feed Section:</strong> Browse through a dynamic feed of
          videos. Click on any video to dive into a detailed view, where your
          chosen video begins playing seamlessly.
        </li>
        <li>
          <strong>Video Player Features:</strong> Enjoy full control over your
          viewing experience: pause, adjust video quality, toggle subtitles, and
          enter full-screen mode for immersive watching.
        </li>
        <li>
          <strong>Related Videos:</strong> Stay engaged with a curated list of
          related videos on the right side of the player, ensuring you never run
          out of content to watch.
        </li>
        <li>
          <strong>Comprehensive Video Details:</strong> Access essential
          information such as the channel name, logo, follower count, upload
          date, and video comments—all displayed clearly on the video page.
        </li>
        <li>
          <strong>YouTube Data API:</strong> All video and channel information
          is sourced from the YouTube v3 API, ensuring real-time access to the
          latest content.
        </li>
        <li>
          <strong>Fully Responsive Design:</strong> Enjoy a seamless experience
          across all devices, making it easy to watch your favorite videos on
          the go!
        </li>
        <li>
          <strong>Restricted:</strong> We restricted to fetch only 10 videos at
          a time because <strong>"Youtube" v3 API</strong> gives 1000 videos
          quota limit per day.
        </li>
      </ul>
      <h3>Conclusion:</h3>
      <p>
        This YouTube Clone is not just a project; it’s a reflection of my
        passion for creating immersive web applications. With its engaging
        features and user-friendly interface, it provides an exciting platform
        for video enthusiasts. Dive into a world of endless content and discover
        your next favorite video!
      </p>
    </div>
  ),
};

const Single = ({ item, onClick }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div
            className="imageContainer"
            ref={ref}
            onClick={() => onClick(item)}
          >
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="demoButton"
            >
              See Project Demo
            </a>
            <button className="viewImageButton" onClick={() => onClick(item)}>
              View Project Image
            </button>
            <button
              className="viewDescriptionButton"
              onClick={() => onClick(item, "description")}
            >
              About Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Modal = ({ item, onClose, type }) => {
  const viewImageInFullScreen = () => {
    window.open(item.img, "_blank");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modalContent">
        {type === "description" ? (
          <div className="descriptionContainer">
            <h2>{item.title}</h2>
            <p>{descriptions[item.id]}</p>
          </div>
        ) : (
          <>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
          </>
        )}
        <div className="buttonContainer">
          {type === "description" ? (
            <button onClick={onClose}>Close</button>
          ) : (
            <>
              <button onClick={viewImageInFullScreen}>
                View Image in Full Screen
              </button>
              <button onClick={onClose}>Close</button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const openModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} onClick={openModal} />
      ))}
      {selectedItem && (
        <Modal item={selectedItem} onClose={closeModal} type={modalType} />
      )}
    </div>
  );
};

export default Portfolio;
