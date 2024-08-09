import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
})
export class InviteComponent implements OnInit {
  isMapActive: boolean = false;
  isInviteActive: boolean = false;
  hasInteracted: boolean = false;
  title = 'Свадьба Анны-Марии и Никиты';
  guestName: string = '';
  arrivalTime: string = '';
  guestCount: string = '';
  mainText: string = '';
  id: string | null = null;

  private guestData: {
    [key: string]: {
      name: string;
      arrivalTime: string;
      mainText: string;
      guestCount: string;
    };
  } = {
    '1': {
      name: 'Дима и Настя',
      arrivalTime: '12:00',
      guestCount: 'вами',
      mainText:
        'Роспись пройдет в ресторане «Романтик» в здании гостиницы Украина. Место не предусматривает большое количество гостей, поэтому мы не можем пригласить вас на это мероприятие, но будем очень рады видеть вас сразу после того, как выйдем оттуда уже в новом статусе!',
    },
    '2': {
      name: 'Папа и Настя',
      arrivalTime: '11:00',
      guestCount: 'вами',
      mainText:
        'Роспись пройдет в ресторане «Романтик» в здании гостиницы Украина на 35 этаже. На церемонию приглашены самые близкие люди 🤍',
    },
    '3': {
      name: 'Игорь',
      guestCount: 'тобой',
      arrivalTime: '12:00',
      mainText:
        'Роспись пройдет в ресторане «Романтик» в здании гостиницы Украина. Место не предусматривает большое количество гостей, поэтому мы не можем пригласить тебя на это мероприятие, но будем очень рады видеть сразу после того, как выйдем оттуда уже в новом статусе!',
    },
    '4': {
      name: 'Папа и мама',
      guestCount: 'вами',
      arrivalTime: '11:00',
      mainText:
        'Роспись пройдет в ресторане «Романтик» в здании гостиницы Украина на 35 этаже. На церемонию приглашены самые близкие люди 🤍',
    },
    '5': {
      name: 'Никита',
      guestCount: 'тобой',
      arrivalTime: '12:00',
      mainText:
        'Роспись пройдет в ресторане «Романтик» в здании гостиницы Украина. Место не предусматривает большое количество гостей, поэтому мы не можем пригласить тебя на это мероприятие, но будем очень рады видеть сразу после того, как выйдем оттуда уже в новом статусе!',
    },
    '6': {
      name: 'Дима',
      guestCount: 'тобой',
      arrivalTime: '12:00',
      mainText:
        'Роспись пройдет в ресторане «Романтик» в здании гостиницы Украина. Место не предусматривает большое количество гостей, поэтому мы не можем пригласить тебя на это мероприятие, но будем очень рады видеть сразу после того, как выйдем оттуда уже в новом статусе!',
    },
    '7': {
      name: 'Маруся',
      guestCount: 'тобой',
      arrivalTime: '11:00',
      mainText:
        'Роспись пройдет в ресторане «Романтик» в здании гостиницы Украина на 35 этаже. На церемонию приглашены самые близкие люди 🤍',
    },
    '8': {
      name: 'Тася и Егор',
      guestCount: 'вами',
      arrivalTime: '12:00',
      mainText:
        'Роспись пройдет в ресторане «Романтик» в здании гостиницы Украина. Место не предусматривает большое количество гостей, поэтому мы не можем пригласить вас на это мероприятие, но будем очень рады видеть сразу после того, как выйдем оттуда уже в новом статусе!',
    },
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    console.log('ID:', this.id);
    this.updateGuestInfo();
  }
  updateGuestInfo(): void {
    if (this.id) {
      if (this.guestData[this.id]) {
        const guest = this.guestData[this.id];
        this.guestName = guest.name;
        this.guestCount = guest.guestCount;
        this.arrivalTime = guest.arrivalTime;
        this.mainText = guest.mainText;
      } else {
        this.guestName = 'Неизвестный гость';
        this.arrivalTime = '';
        this.mainText = 'Информация не доступна';
      }
    } else {
      this.guestName = 'Неизвестный гость';
      this.arrivalTime = '';
      this.mainText = 'Информация не доступна';
    }
  }
  onToggleClick(): void {
    this.isMapActive = !this.isMapActive;
    setTimeout(() => {
      this.isInviteActive = true;
    }, 10000); // Пример 10 секунд
  }

  playAudio(): void {
    if (this.hasInteracted) {
      const audio = <HTMLAudioElement>document.getElementById('myAudio');
      if (audio) {
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    }
  }

  onUserInteraction(): void {
    this.hasInteracted = true;
    this.playAudio();
  }
}
