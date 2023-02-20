import React from 'react'
import { Carousel } from 'antd';

export default function AboutMain() {

return (
    <div>
	<div className='Carousel-1'>
		<Carousel autoplay>
		<div>
            <img src="./img/about01.jpg" alt="I 1" style={{
						height: 300 }}/>
		</div>
		<div>
            <img src="./img/about02.jpg" alt="I 1" style={{
						height: 300 }}/>
		</div>
		<div>
		    <img src="./img/about03.jpg" alt="I 1" style={{
						height: 300 }}/>
		</div>
		</Carousel>
        <h3 className='carousel-text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus vel arcu lacinia, laoreet quam nec, auctor massa. In egestas mauris sit amet justo sodales, 
        sit amet ultricies augue cursus. Pellentesque id justo eget nulla porta hendrerit. 
        Curabitur ligula ligula, fringilla commodo fringilla nec, dignissim lacinia dui. 
        Morbi nec luctus nunc, malesuada vehicula ligula. Fusce pretium blandit suscipit. 
        Nulla non sapien sit amet lectus placerat tincidunt.</h3>
	</div>

<div className='Carousel-2'>
        <h3 className='carousel-text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus vel arcu lacinia, laoreet quam nec, auctor massa. In egestas mauris sit amet justo sodales, 
        sit amet ultricies augue cursus. Pellentesque id justo eget nulla porta hendrerit. 
        Curabitur ligula ligula, fringilla commodo fringilla nec, dignissim lacinia dui. 
        Morbi nec luctus nunc, malesuada vehicula ligula. Fusce pretium blandit suscipit. 
        Nulla non sapien sit amet lectus placerat tincidunt.</h3>
		<Carousel autoplay>
		<div>
            <img src="./img/about04.jpg" alt="I 1" style={{
						height: 300 }}/>
		</div>
		<div>
            <img src="./img/about05.jpg" alt="I 1" style={{
						height: 300 }}/>
		</div>
		<div>
		    <img src="./img/about06.jpg" alt="I 1" style={{
						height: 300 }}/>
		</div>
		</Carousel>
	</div>
    <div className='carousel-3-zone'>
    <img className='last-img' src="./img/last.jpg" alt="I 1" style={{
						height: 400, width:800 }}/>
    <div className='Carousel-3'>
    
		<Carousel autoplay>
		<div  className='carousel-text3'>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus vel arcu lacinia, laoreet quam nec, auctor massa. In egestas mauris sit amet justo sodales, 
        sit amet ultricies augue cursus. Pellentesque id justo eget nulla porta hendrerit. 
        Curabitur ligula ligula, fringilla commodo fringilla nec, dignissim lacinia dui. 
        Morbi nec luctus nunc, malesuada vehicula ligula. Fusce pretium blandit suscipit. 
        Nulla non sapien sit amet lectus placerat tincidunt.</h3>
        <h3>Номер телефона</h3>
        <h2>+7864648986</h2>
		</div>
		<div  className='carousel-text3'>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus vel arcu lacinia, laoreet quam nec, auctor massa. In egestas mauris sit amet justo sodales, 
        sit amet ultricies augue cursus. Pellentesque id justo eget nulla porta hendrerit. 
        Curabitur ligula ligula, fringilla commodo fringilla nec, dignissim lacinia dui. 
        Morbi nec luctus nunc, malesuada vehicula ligula. Fusce pretium blandit suscipit. 
        Nulla non sapien sit amet lectus placerat tincidunt.</h3>
        <h3>Номер телефона</h3>
        <h2>+7864648986</h2>
		</div>
		<div className='carousel-text3'>
        <h3 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus vel arcu lacinia, laoreet quam nec, auctor massa. In egestas mauris sit amet justo sodales, 
        sit amet ultricies augue cursus. Pellentesque id justo eget nulla porta hendrerit. 
        Curabitur ligula ligula, fringilla commodo fringilla nec, dignissim lacinia dui. 
        Morbi nec luctus nunc, malesuada vehicula ligula. Fusce pretium blandit suscipit. 
        Nulla non sapien sit amet lectus placerat tincidunt.</h3>
        <h3>Номер телефона</h3>
        <h2>+7864648986</h2>
		</div>
		</Carousel>
	</div>
    </div>
    </div>
);
}

