import { Component , OnInit} from '@angular/core';
import { faPlus, faHouse, faUser, faGear, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faWhatsapp, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  [x: string]: any;
  faPlus = faPlus; 
  faHouse = faHouse;
  faUser = faUser;
  faGear = faGear;
  faEnvelope = faEnvelope; 
  faGithubAlt = faGithubAlt;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin

  list!: NodeListOf<HTMLLIElement>;

  ngOnInit(): void {
    this.list = document.querySelectorAll('li');
    this.list.forEach((item: HTMLLIElement) =>
      item.addEventListener('click', this.activeLink.bind(item))
    );
  }
  
  clickMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menu?.classList.toggle('active');
    menuToggle?.classList.toggle('active');
  }

  activeLink() {
    this.list.forEach((item: HTMLLIElement) =>
      item.classList.remove('active')
    );
    this['classList'].add('active');
  }

}
