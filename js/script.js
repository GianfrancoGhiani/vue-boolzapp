'use strict'

const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    
                    messages: [
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            },
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            },
                        {
                            menu: false,
                            visible: true,
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
                    
                    messages: [
                        {
                            menu: false,
                            visible: true,
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                            },
                        {
                            menu: false,
                            visible: true,
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                            },
                        {
                            menu: false,
                            visible: true,
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
                    
                    messages: [
                        {
                            menu: false,
                            visible: true,
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            menu: false,
                            visible: true,
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            menu: false,
                            visible: true,
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
                    
                    messages: [
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            menu: false,
                            visible: true,
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
                    
                    messages: [
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            menu: false,
                            visible: true,
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
                    
                    messages: [
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            menu: false,
                            visible: true,
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
                    
                    messages: [
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            menu: false,
                            visible: true,
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
                    
                    messages: [
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            menu: false,
                            visible: true,
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    }
                    ],
            activeChatIndex: 0,
            searchValue: '',
            newMessageModel: {
                date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
                message: '',
                status: 'sent'
                },
            inputTextMessage: '',
            show: false,
            authorInfo: '',
            dateInfo:''
            }
    },
    computed: {
        filteredContacts(){
            return (
                this.contacts.filter((contact)=>{
                    const name = contact.name.toLowerCase();
                    return name.includes(this.searchValue.toLowerCase());
                })
            )
        },
    },
    methods: {
        //take the id from v-for cicle with value.property
        activeChat(id){
        //using find index tu find the chat to show (in case of list changes)
            this.activeChatIndex = this.contacts.findIndex((contact)=>{
                
                return contact.id == id
            })
            console.log(this.contacts[this.activeChatIndex], this.activeChatIndex)
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

        // take the contact obj
        lastMessageReceived(contact){
            const receivedList = [];
            const received = contact.messages.filter((msg)=>{
                if(msg.status == 'received'){
                    
                    return receivedList.push(msg)
                }
            })
            // return the last message obj and than i can use its properties like 'date' or 'message'
            if(receivedList.length > 0){
                return receivedList[receivedList.length - 1]
            } else {
                return {
                    date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
                    message: '',
                    status: 'received'
                    }
            }
        },

        deleteMessage(i){
            this.contacts[this.activeChatIndex].messages[i] = {};
            console.log(this.contacts[this.activeChatIndex].messages[i])
        
        },
        showInfo(i){
            this.authorInfo = '';
            this.dateInfo = '';
            let author;
            if(this.contacts[this.activeChatIndex].messages[i].status == 'received'){
                author = this.contacts[this.activeChatIndex].name;
            } else{
                author = 'Sofia';
            }
            const d = this.contacts[this.activeChatIndex].messages[i].date;
            this.authorInfo = `Mittente: ${author}`;
            this.dateInfo = `Data/Tempo: ${d}`;
        },
        menu(i){
            this.authorInfo = '';
            this.dateInfo = '';
            this.contacts[this.activeChatIndex].messages[i].menu = !this.contacts[this.activeChatIndex].messages[i].menu
        },
        deleteAllMessages(){
            this.contacts[this.activeChatIndex].messages = [];
            this.show = false;
            
        },
        deleteChat(){
            this.contacts.splice([this.activeChatIndex], 1)
            this.show = false;
            
        }
    },
    mounted() {

    },
})
app.mount('#app');

