import React from 'react'
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyreel">
            <Story 
            image="https://www.sideshow.com/wp/wp-content/uploads/2020/06/500711b_press03-481x740.jpg"
            profileSrc="https://luxurylaunches.com/wp-content/uploads/2019/09/Businessman-fashion-1170x780.jpeg"
            title="Vikram"
            />

             <Story 
            image="https://tv-fanatic-res.cloudinary.com/iu/s--YS5X0z36--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1625615675/fear-street-trilogy-weapons-poster.jpg"
            profileSrc="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg"
            title="Shankar"
            />

             <Story 
            image="https://images-na.ssl-images-amazon.com/images/I/71R5PutIpZL.jpg"
            profileSrc="https://avatars.githubusercontent.com/u/3030665?s=64&v=4"
            title="Sanvi Roy"
            />

             <Story 
            image="https://i0.wp.com/thumbs.dreamstime.com/b/neon-facebook-icon-beautiful-glowing-led-light-157850319.jpg"
            profileSrc="https://ta-images.condecdn.net/image/m8LpEWVdXA2/crop/1620/f/gettyimages-961740582.jpg"
            title="Mark"
            />

            <Story 
            image="https://images-na.ssl-images-amazon.com/images/I/91V96XNZg+L.jpg"
            profileSrc="https://i.guim.co.uk/img/media/830b97cb1b28bef16b8db358c8d815b541fe9c75/0_141_4200_2521/master/4200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4baee9d26011c934925297cad8833395"
            title="Elon Musk"
            />
            
        </div>
    )
}

export default StoryReel
