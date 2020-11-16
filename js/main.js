/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {

        // riferimento indice array
        indexContacts: 0,

        // riferimento messaggio input
        messageText:"",

        // riferimento data e ora sms
        timeData: dayjs().format("DD/MM/YYYY hh:mm:ss a"),


        timeData1S: dayjs().add(1, 's').format("DD/MM/YYYY hh:mm:ss a"),

        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ],
            },
        ],
    },
    methods: {

      // indice array per conversazioni
      text(index){
        this.indexContacts = index;
      },

      // rimozione messaggi
      removeSms(indexMessage){
      this.contacts[this.indexContacts].messages.splice(indexMessage,1);
      },

      // push oggetto per singola conversazione
      pushObj(){
        if (this.messageText.trim() !== "") {

          this.contacts[this.indexContacts].messages.push({
            date: this.timeData,
            message: this.messageText.trim(),
            status: "sent",
          });

          setTimeout( () => {

            this.contacts[this.indexContacts].messages.push({
              date: this.timeData1S,
              message: 'ok',
              status: 'received',
            });

          }, 1000);

          this.messageText="";
        }

      },

      // dateTime(){
      //   dayjs().add(1, 's').format("DD/MM/YYYY hh:mm:ss a");
      // }

    },
});
