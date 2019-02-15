import React from 'react'
import DividerHeading from './divider_heading'
import Photos from './photos'
import fb from '../images/social/fb.jpg'
import ig from '../images/social/ig.jpg'
import yt from '../images/social/yt.jpg'

const Media = () => (
    <div>
        <div className='layoutTopPadding'></div>
            <DividerHeading headerText={'Photos'} />
            <Photos />
            <DividerHeading headerText={'Social'} />
            <div>
                <h3>Like</h3>
                <a href="https://www.facebook.com/theconstanttourists/" target='_blank' rel="noopener noreferrer">
                    <img className="social-link" src={fb} height="70px" alt="facebook" />
                </a>
            </div>
            <br />
            <div>
                <h3>Follow</h3>
                <a href="https://www.instagram.com/theconstanttourists/" target='_blank' rel="noopener noreferrer">
                    <img className="social-link" src={ig} height="70px" alt="instagram" />
                </a>
            </div>
            <br />
            <div>
                <h3>Subscribe</h3>
                <a href="https://www.youtube.com/channel/UCgfAsHmyzHzDL9d_kSDYEPg" target='_blank' rel="noopener noreferrer">
                    <img className="social-link" src={yt} height="70px" alt="youtube" />
                </a>
            </div>
            <DividerHeading headerText={'Press'} />
            <p class="press-article">
                <em>The Taos News 06/28/2012, Page S20</em>
                <br /><br />
                <strong>The Constant Tourists aren&rsquo;t likely to stand around the plaza looking bewildered&nbsp;</strong>
                <br /><br />
                Kazoo, accordion, trumpet, cello &mdash; the Constant Tourists are not your typical band. The Denver-based 
                band has been likened to the Squirrel Nut Zippers and&nbsp;Pink Martini,though according to founding member 
                Cassie S&aacute;nchez, neither group directly influenced them.&nbsp;
                <br /><br />
                Instead, they owe their gypsyjazz revelry to S&aacute;nchez&rsquo; exposure to the street and urban musicians&nbsp;of France, 
                as well as zydeco music.&nbsp;
                <br /><br />
                Band members also bring strains of classical and jazz training into the mix. The Constant 
                Tourists will be playing Saturday (June 30), 7-10 p.m., in the Adobe Bar at The Taos Inn, 125 Paseo del Pueblo Norte. 
                The all-ages&nbsp;concert is free.&nbsp;The Constant Tourists began with Cassie and her husband Nate S&aacute;nchez 
                about seven years ago up in Washington State. A self-taught guitarist, Nate was part of his high school&rsquo;s jazz 
                and chamber all-state choirs. He began writing songs in middle school. Cassie, who grew up in Colorado Springs, played 
                as first chair trumpet through her high school years, was part of an all-state choir, and played in a ska band called 
                The Ghetto Cherubs. She also played piano, which turned out to be useful when she picked up her first accordion several 
                years ago.&nbsp;
                <br /><br />
                The couple collaborates on songwriting and vocals with Nate playing guitar and kazoo and 
                Cassie playing accordion and trumpet. Despite their name, the two played primarily in Washington until they moved to Oregon 
                for about four years, then to drier territory. Within six months of moving back to the Rocky Mountains, they added three new 
                members to the band fill out their sound.&nbsp;
                <br /><br />
                Joel Ambrosino, who plays mandolin&nbsp;and does vocals, hails from Michigan, and adds a love for funk and bluegrass to the 
                band. Cellist Rebecca Jonas, originally from New York state, has a background in rock, jazz and classical music. She has 
                performed with the Washington Metropolitan Philharmonic Orchestra and more recently in Boulder, Colo., with Carry Me Ohio. 
                When not performing, Jonas teaches music for middle-schoolers and gives private music lessons.&nbsp;
                <br /><br />
                Drummer and percussionist Samuel Gillet comes all the way from Belgium. He has drummed for 15 years and brings Latin, jazz, 
                blues and world beats to the mix.&nbsp;
                <br /><br />
                Cassie said the Constant Tourists are used to playing long sets of music. They like to ease an audience in at the beginning, 
                building up to a crescendo&nbsp;of their most energetic pieces. They also enjoy interacting with their audience throughout 
                their shows.&nbsp;
                <br /><br />
                &ldquo;We have a tune that is kind of a call-and-response scat song,&rdquo; Cassie said, adding, &ldquo;We love it when 
                people dance.&rdquo;&nbsp;<br /><br />The Constant Tourists released their latest CD, &ldquo;Carry On,&rdquo; with the full 
                band in April 2012. Sample songs from the CD can be listened to by visiting their website.&nbsp;<br /><br />Asked how the 
                band chose the title, Cassie said the name was suggested by one of their fans in response to a request the band made 
                on Facebook.&nbsp;
                <br /><br />
                &ldquo;We liked it because it has a dual meaning &ndash; &lsquo;carry on&rsquo; as in getting over stuff, 
                and &lsquo;carry on&rsquo; as in the Constant Tourist&rsquo;s theme of traveling and touring.&rdquo;&nbsp;
                <br /><br />On that note, The Constant Tourists are testing the waters here in New Mexico, and exploring how well they travel 
                out on the road.&nbsp;
                <br /><br />For more, visit&nbsp;www.theconstanttourists.com .&nbsp;
                <br />RADIO:&nbsp;http://www.kgnu.org/kabaret/7/8/2013
                <br />PRESS:&nbsp;http://www.westword.com/2013-02-28/music/the-constant-tourists/
                <br /><br />Call The Taos Inn at&nbsp;(575) 758-2233&nbsp;or visit&nbsp;www.taosinn.com&nbsp;.&nbsp;
                <br />THE HUM&nbsp;Ariana Kramer
            </p>
    </div>
)

export default Media;
