import Image from 'next/image'
import './styles.css'

export const metadata = {
  title: 'About me',
  description: 'Here I am',
};



export default function AboutMePage () {
  return (
    <div className="aboutMePage">
      <div className="myInfo">
        <div className="leftSide">
          <Image alt="myPhoto" src="/images/photo_2022-11-09_13-56-57.jpg" width="300" height="300" />
        </div>
        <div className="rightSide">
          <p>Hey there. I am Murad and I can prepare you to pass International
            exams like IELTS, TOEFL and Cambridge exams (A2 - C1). I have 10
            years of teaching experience and I have taught in schools and
            universities. For the last 4 years I’ve been preparing children and
            adults to pass exams with 100% success rate. I also teach general
            English but the end goal is always the same - to pass exams. It
            shows tangible results of my work so you I’m not here to waste your
            time.</p>

          <p>I have a Master’s degree in linguistics and a CELTA
            certification. Apart from teaching I do a couple of other things
            like: being a musician being an aspiring power-lifter being a health
            enthusiast (I have a nutritionist certification) being an aspiring
            web-developer (this web-site is run by me).</p>

          <p> If you want to discuss
            having lessons with me please use the following social media links:
          </p>
          <ul>
            <li>vk</li>
            <li>ig</li>
            <li>telegram</li>
          </ul>
          <p>You can find the growing results of my students
            below.

          </p>
        </div>
      </div>
      <div className="myResults">

      <div className="myResults_item">
          <Image alt="image1" src="/images/1.jpg" width="367" height="540"/>
        </div>
        <div className="myResults_item">
          <Image alt="image2" src="/images/2.jpg" width="407" height="218"/>
        </div>
        <div className="myResults_item">
          <Image alt="image3" src="/images/3.jpg" width="805" height="1080"/>
        </div>
        <div className="myResults_item">
          <Image alt="image4" src="/images/4.jpg" width="342" height="493"/>
        </div>
        <div className="myResults_item">
          <Image alt="image5" src="/images/5.jpg" width="480" height="480"/>
        </div>
        <div className="myResults_item">
          <Image alt="image6" src="/images/6.jpg" width="571" height="318"/>
        </div>
        <div className="myResults_item">
          <Image alt="image7" src="/images/7.jpg" width="371" height="215"/>
        </div>
        <div className="myResults_item">
          <Image alt="image8" src="/images/8.jpg" width="467" height="348"/>
        </div>
        <div className="myResults_item">
          <Image alt="image9" src="/images/9.jpg" width="444" height="257"/>
        </div>
        <div className="myResults_item">
          <Image alt="image10" src="/images/10.jpg" width="390" height="202"/>
        </div>

      </div>
    </div>
  )
}
