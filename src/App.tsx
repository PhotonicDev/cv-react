import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import meSquare from './assets/me_square.png'

function App() {
  return (
   <div className="pad background limit-1000">
		 <Card className="push-down">
			 <CardContent>
					<img className="profile-img profile-img-stickout" src={meSquare} />
					<div className="push-down-200">
						<h1 className="text-center">Nerijus Pamedytis</h1>
						<p>
							<b>Frontend engineer</b> @ <a target="_blank" href="https://sabienzia.com">Sabienzia Technologies GmbH</a>
						</p>
						<p>
						Hello earthlings, I am Nerijus and I am a Frontend developer living in Berlin. I started my deep venture into programming about 6 years ago after transitioning from graphical design and starting to study multimedia design and communication. I love working on cross-platform and cutting edge technologies. And I'm currently on my free time like to tinker on machine learning and deep learning using Tensorflow.
						</p>
					</div>
			 </CardContent>
		 </Card>
	 </div>
  );
}

export default App;
