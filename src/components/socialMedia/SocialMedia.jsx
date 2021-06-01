import './socialMedia.scss'
import {
    PhoneInTalk,
    Mail,
    GitHub,
    Instagram,
    YouTube,
    LinkedIn,
    GetApp,
    Twitter,
    Facebook,
  } from "@material-ui/icons";

export default function SocialMedia() {
    return (
        <div className="socialmedia">
                  <a href="tel:+584265942155">
            <PhoneInTalk className="icon" />
          </a>
          <a href="mailto:alej969@gmail.com">
            <Mail className="icon" />
          </a>
          <a href="https://www.github.com/todoca/">
            <GitHub className="icon" />
          </a>
          <a href="https://www.instagram.com/alejomarcano/">
            <Instagram className="icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCd97tvT5PyPdRKrdV1dfjxQ">
            <YouTube className="icon" />
          </a>
          <a href="./">
            <GetApp className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/alejandromarcano/">
            <LinkedIn className="icon" />
          </a>
          <a href="https://twitter.com/alej969">
            <Twitter className="icon" />
          </a>
          <a href="https://www.facebook.com/alejandro.marcano/">
            <Facebook className="icon" />
          </a>
        </div>
    )
}
