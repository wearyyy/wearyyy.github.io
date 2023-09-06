import './App.css';
import Post from './Post.js';
import BottomBar from './BottomBar.js';

function App() {
  return (
    <div className="App">

          <h1 class = "font-bold text-7xl">Welcome</h1>

          <Post
            head = "About"
            body = {<p>I'm currently a third year Software Engineering coop student at Carleton University. I am currently doing a 
            coop in Shenzhen in a non-coding position. 
            <br /><br />
            Most of the time I'll be busy with work or school, but during my free time I like spend time hanging out with friends and 
            listening to podcasts and essay videos.
            <br /><br />
            Currently, I am looking for co-op opportunities for the Fall 2023 semester. If you think that I would fit your requirements,
            feel free to contact me through my email at the bottom of the page.
            </p>}
          />

          <Post
            head = "Experience"
            body = {<div>
              <h1 class="font-bold text-2xl">
                Shenzhen eIoT Technology Co., Ltd.
              </h1>
              <p>
                Social Media Manager Assistant | June 2023 - August 2023
              </p>
              
              <ul class = "list-disc list-inside">
                <li>Translated website and FAQ to make products more accessible to foreign companies</li>
                <li>Edited videos to demonstrate how to use the products</li>
                <li>Created social media post to help products reach a wider audience</li>
              </ul>

            </div>}
          />

          <Post
            head = "Education"
            body = {<div>
              <h1 class = "font-bold text-2xl">University of Carleton</h1>
              <p>Bachelor of Computer Science: Software Engineering Stream - Coop</p>
              <h1 class = "font-bold text-2xl">Awards</h1>
              <p>Lester B Pearson ($3000)</p>

            </div>}
          />

          <Post
            head = "Projects"
            body = {<div>
              <h1 class = "font-bold text-2xl">Resume Website</h1>
              <p>A simple static website that acts as an extention to my resume.</p>

            </div>}
          />

          <Post
            head = "Tech"
            body = {<div>
                <p>
                <b>Languages:</b> Javascript, Java, C, C++, Python <br />
                <b>Frameworks:</b> React <br />
                <b>Other:</b> Git/Github                
                </p>

            </div>}
          />

          <BottomBar />

    </div>
  );
}

export default App;
