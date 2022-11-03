'use strict'
/*
Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
*/
const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    id: 1,
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
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                            }
                        ],
                    },
                    {
                    id: 2,
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
                            status: 'sent'
                            }
                        ],
                    },
                    {
                    id: 3,
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
                        }
                        ],
                    },  
                    {
                    id: 4,
                    name: 'Alessandro B.',
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
                        }
                        ],
                    },
                    {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                    },
                    {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                    },
                    {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                    },
                    {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    }
                    ],
            activeChatIndex: 0,
            newMessageModel: {
                
                date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
                message: '',
                status: 'sent'
                },
            inputTextMessage: '',
            }
    },
    methods: {
        //take the id from v-for cicle with value.property
        activeChat(id){
        //using find index tu find the chat to show (in case of list changes)
            this.activeChatIndex = this.contacts.findIndex((contact)=>{
                return contact.id == id
            })
        },

        sendMessage(){
        //clone the "newMessageModel" and add the text with input v-model
            if(this.inputTextMessage.length > 0){
                const modelClone = Object.assign({}, this.newMessageModel);
                modelClone.message = this.inputTextMessage;
                this.inputTextMessage = '';
                // push into messages array
                this.contacts[this.activeChatIndex].messages.push(modelClone);
                this.autoAnswer();
            }
        },

        //after 1sec answer at every msg with 'ok' cloning the new message model and changing his status property into 'received'
        autoAnswer(){
            setTimeout(()=>{
                const modelClone = Object.assign({}, this.newMessageModel);
                modelClone.message = 'Ok';
                modelClone.status = 'received';
                // push into messages array
                this.contacts[this.activeChatIndex].messages.push(modelClone);
            }, 1000)
        },

        // take the required chat index
        // sometimes it can be activeIndex or simply index of contacts array
        lastMessageReceived(index){
            //create a contacts[index].messages clone and revert it
            let revertedMsgArray = Array.from(this.contacts[index].messages);
            revertedMsgArray = revertedMsgArray.reverse();
            //search the first result the matches with the condition "status: 'received'" and return his index
            const lastRecMsgIndex = revertedMsgArray.findIndex((msg)=>{
                return msg.status == 'received';
            })
            //return the obj in the reverted clone that matches the previous condition
            //so i can use the necessary property like 'date' or 'message' where i want /w a single function
            return revertedMsgArray[lastRecMsgIndex]
        }
    },
    mounted() {

    },
})
app.mount('#app');

