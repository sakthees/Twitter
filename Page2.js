import React from 'react';
import './Page2.css';
import logo from './logo.png';
import pic from './pic.png';
import as from './as.png';
import nm from './nm.png';
import jr from './jr.png';
import first from './first1.png';
import third from './third1.png';
import second from './second1.png';
import tweet from './tweet.png';
import Avatar from 'material-ui/Avatar';


class Page1 extends React.Component {
  render(){
    return(
    	<div class ="body">  
 			<div class="topnav1">
 					<a class = "active" href="#">Home</a>
  					<a class = "nonactive" href="/notifications">Notifications</a>
  					<a class = "nonactive1" href="/messages">Messages</a> 					  
  					<img src={logo}  alt="logo" />
  					<button  class="button" type="button">Tweet</button>
  					<Avatar className="Avator" src={pic}/>
  					<input class="search" type="search" placeholder="Search Twitter"/>
			</div>
			<div class="topbar">
				<h1>aadhaar</h1>
			</div>

			<div class="topnav2">
				<div>
 					<a class = "active" href="#">Top</a>
  					<a class = "nonactive" href="/latest">Latest</a>
  					<a class = "nonactive1" href="/people">People</a>
  					<a class = "nonactive1" href="/photos">Photos</a> 
  					<a class = "nonactive1" href="/videos">Videos</a>  					  
  					<a class = "nonactive1" href="/news">News</a> 
  					<a class = "nonactive1" href="/broadcasts">Broadcasts</a> 
				</div>
			</div>
			<div class="first1">
				<img src={first}/>
			</div>
			<div class="follow1">
				<p class="trend1">Who to follow</p>
				<p class="change1">Refresh</p>
				<p class="change2">View all</p>
				<Avatar  class="wimg1" src={as}/>
				<p class="wname1">arvind swami </p><span class="wnames1">@thearvin...</span>
				<button  class="wbutton1" type="button">Follow</button>
				<Avatar  class="wimg2" src={nm}/>
				<p class="wname2">Narendra Modi </p><span class="wnames2">@naren...</span>
				<button  class="wbutton2" type="button">Follow</button>
				<Avatar  class="wimg3" src={jr}/>
				<p class="wname3">Jayam Ravi </p><span class="wnames3">@actor_jaya...</span>
				<button  class="wbutton3" type="button">Follow</button>
				<a class="find" href="/find">Find people you know</a>
			</div>
			<div class="trendbar1">
				<p class="trend">Trends for you</p>
				<p class="change">Change</p>
				<p class="hash">#TSKWithSunTv</p>
				<p class="info">1,733 Tweets</p>
				<p class="hash">#INDvSL</p>
				<p class="info">India struggle without Virat Kohli against Sri Lanka</p>
				<p class="hash">#KalakkuMachaanMaking</p>
				<p class="hash">#TEDTalksIndiaNayiSoch</p>
				<p class="info">27.3K Tweets</p>
				<p class="hash">#GhajinikanthFirstLook</p>
				<p class="hash">#VelaikkaranSetMaking</p>
				<p class="hash">#INDvGER</p>
				<p class="info">2,591 Tweets</p>
				<p class="hash">#BanBeeflnMeghalaya</p>
				<p class="info">1,428 Tweets</p>
				<p class="hash">#HelloAudioLaunch</p>
				<p class="info">1,613 Tweets</p>
				<p></p>
			</div>
			
			<div class="copyright1">
				<p class="copy">© 2017 Twitter  About  Help  Centre  Terms  Privacy  policy  Cookies  Ads  info  Brand  Blog  Status  Apps  Jobs  Marketing  Businesses  Developers</p>
			</div>
			
			<div class="second1">
				<img src={second}/>
			</div>
			<div class="third1">
				<img src={third}/>
			</div>
		</div>
      )
  }
}

export default Page1;