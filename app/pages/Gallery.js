import React, { Component } from 'react';
import { Linking, Text, View } from 'react-native';
import TimedSlideshow, {onClose} from 'react-native-timed-slideshow';
import Shop from '../pages/Shop';
import Menu from '../components/Menu';
import Story from './Story';
import { navigationRef } from '../navigation/navigationService';

const Gallery = ({ navigation }) =>{

		const items = [
			{
				uri: "https://images.squarespace-cdn.com/content/v1/5a79c4d46957dae99fcee4e1/1593193844207-9P83PTZ10RN0J7NIGO5H/ke17ZwdGBToddI8pDm48kJqUEiNNT7_Oy5_eDfxLoet7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmbA40xHUQunj0vJznaJavlxCln8iZJmtpEhXpCYo9xn3pkpRdm6KY38hqeQMzzQAa/Photo+Jun+24%2C+6+14+44+PM.jpg?format=2500w",
				url: "google.com",
				title: "HH Embroidery Patch",
				text: "Minnesota, USA",
			},
			{
				uri: "https://images.squarespace-cdn.com/content/v1/5a79c4d46957dae99fcee4e1/1593275277745-OACM54MKRZQO44SKFNQR/ke17ZwdGBToddI8pDm48kEPqoMFOhzA3q4A3VFGcFLt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fI1iYD9xHJo2JLxv6AwumxWIst0C1lSCh1N30TSGvFFpQ/DSC_0663.jpeg?format=2500w",
				url: "google.com",
				title: "HH Bandana Set",
				text: "Val di Sole, Italy",
				duration: 3000,

			},
			{
				uri: "https://images.squarespace-cdn.com/content/v1/5a79c4d46957dae99fcee4e1/1593274897607-CB5BCBTIV5X6ADFBSF8I/ke17ZwdGBToddI8pDm48kAGx3IFADtt9koaOuly55F57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0pTKqSDRwmMK43IUI3HojJX_iGOyvGz0VEAhzFdMwNTUP3iYIRpjRWHZRVGJwIQ0nA/DSC_0317.jpeg?format=2500w",
				url: "google.com",
				title: "HH Camouflage Poncho",
				text: "Tokyo, Japan",
				fullWidth: true,
			},
		];

		return (
        <TimedSlideshow
					items={items}
				/>
		);
	}

export default Gallery;