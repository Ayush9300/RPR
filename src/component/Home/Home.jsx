import React, { useContext } from 'react'
import "./Home.css"
import Card from "../Card/Card"
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
import farmhouse from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse2 from "../../assets/farmhouse.jpg"
import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"
import flat from "../../assets/roomhouse.avif"
import flat1 from "../../assets/roomhouse1.avif"
import flat2 from "../../assets/roomhouse3.avif"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa2 from "../../assets/villa3.jpg"
import mountain from "../../assets/mountain.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain3.avif"
import hathouse from "../../assets/huthouse.jpg"
import hathouse1 from "../../assets/huthouse1.jpg"
import hathouse2 from "../../assets/huthouse2.jpg"
import village from "../../assets/village1.avif"
import village1 from "../../assets/village2.avif"
import village2 from "../../assets/village3.avif"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import old from "../../assets/old.avif"
import old1 from "../../assets/old2.avif"
import old2 from "../../assets/old3.avif"
import roomnew from "../../assets/roomnew.avif"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"
import { dataContext } from '../../Context/Usercontext'

function Home() {
    let{
      title,
      setTitle, 
      addListing,setaddListing, addImage1, setaddImage1 ,addImage2, setaddImage2, addImage3 ,setaddImage3 ,
      price, setPrice,
   }=useContext(dataContext)
  return (
    <div id = "home">
      <Card image1={house} image2={house1} image3={house2} title ={"3BHK Villa in Bhopal"} price={"40,000"}/>
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={ski} image2={ski1} image3={ski2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={flat} image2={flat1} image3={flat2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={villa} image2={villa1} image3={villa2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={mountain} image2={mountain1} image3={mountain2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={hathouse} image2={hathouse1} image3={hathouse2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={village} image2={village1} image3={village2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={room} image2={room1} image3={room2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={old} image2={old1} image3={old2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title ={"3BHK Villa in Betul"} price={"30,000"}/>
      <Card image1={hut3} image2={hut2} image3={hut1} title ={"3BHK Villa in Betul"} price={"30,000"}/>


      { addListing?<Card image1={URL.createObjectURL(addImage1)} image2={URL.createObjectURL(addImage2)} image3={URL.createObjectURL(addImage3)} title ={title} price={price}/>:""}


    </div>
  )
}

export default Home
