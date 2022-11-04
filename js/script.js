'use strict'

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
            searchValue: '',
            newMessageModel: {
                date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
                message: '',
                status: 'sent'
                },
            inputTextMessage: '',
            show: false,
            authorInfo: '',
            dateInfo:'',
            msgOpt: false,
            menuIndex: null,
            botAnswers: [
                'La legge di Murphy dice che tutto quello che deve accadere, accadrà e a noi non sembrava assolutamente una cosa brutta',
                "Nessuno voleva credermi, ma sapevo che saresti tornato. Come? Perchè il mio papà me l'aveva promesso.",
                'La scienza è ammettere ciò che non sappiamo',
                'Non siamo destinati a salvare il mondo ma ad abbandonarlo',
                "Qual'è il parassita più resistente? Un'idea! Una singola idea della mente umana può costruire città! Un'idea può trasformare il mondo e riscrivere tutte le idee! Ed è per questo che devo rubarla!",
                "Un'idea è come un virus. Una volta che s'impianta nella mente continua a crescere",
                "A chi piacerebbe restare tanto in un sogno!? Dipende dal sogno",
                "Non riesco a ricordarmi di dimenticarti",
                "La memoria può cambiare la forma di una stanza, il colore di una macchina, i ricordi possono essere distorti, sono una nostra interpretazione, non sono la realtà! Sono irrilevanti rispetto ai fatti",
                "Come faccio a guarire se non posso sentire il tempo",
                "Ok",
                "Ciao",
            ],
            showemoji: false,
            icons:[
                '&#128512;',
                '&#128513;',
                '&#128514;',
                '&#128515;',
                '&#128516;',
                '&#128517;',
                '&#128518;',
                '&#128519;',
                '&#128521;',
                '&#128522;',
                '&#128523;',
                '&#128524;',
                '&#128525;',
                '&#128526;',
                '&#128528;',
                '&#128529;',
                '&#128530;',
                '&#128536;',
                '&#128545;',
                '&#128548;',
                '&#128561;',
                '&#129315;',
                '&#129299;',
                '&#129319;',
                '&#129321;',
                '&#129325;',
                '&#129488;',
                '&#9996;',
                '&#9995;',
                '&#10024;',
                '&#10062;',
                '&#128064;',
                '&#128077;',
                '&#128079;',
                '&#128152;',
                '&#128149;',
                '&#128156;',
                '&#128158;',
                '&#128584;',
                '&#129310;',
                '&#129505;',
                '&#127802;',
                '&#127801;',
                '&#9749;'
              ],
            }
    },
    computed: {
        //dinamic sidebar contacts filter, input= searchValue and contact.name
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
        //using findindex to find the chat to show (in case of list changes)
            this.activeChatIndex = this.contacts.findIndex((contact)=>{
                
                return contact.id == id
            })
        },
        addEmoji(i){
            this.inputTextMessage += this.icons[i];
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
                this.$nextTick(()=>{
                    const el = this.$refs.msg[ this.$refs.msg.length -1];
                    el.scrollIntoView();
                })
            }
        },

        //after 1sec answer at every msg with 'ok' cloning the new message model and changing his status property into 'received'
        autoAnswer(){
            setTimeout(()=>{
                const modelClone = Object.assign({}, this.newMessageModel);
                modelClone.message = this.botAnswers[randomNumber(0, this.botAnswers.length -1)];
                modelClone.status = 'received';
                // push into messages array
                this.contacts[this.activeChatIndex].messages.push(modelClone);
                this.$nextTick(()=>{
                    const el = this.$refs.msg[ this.$refs.msg.length -1];
                    el.scrollIntoView();
                })
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

        //take msg index and replace his obj with an empty one
        deleteMessage(i){
            this.contacts[this.activeChatIndex].messages.splice(i, 1);
            
        },

        //take msg index
        showInfo(i){
            this.authorInfo = '';
            this.dateInfo = '';
            let author;
            //verify if it's received or not, so determine the author
            if(this.contacts[this.activeChatIndex].messages[i].status == 'received'){
                author = this.contacts[this.activeChatIndex].name;
            } else{
                author = 'Sofia';
            }
            //take the date of the msg by searching in the main array
            const d = this.contacts[this.activeChatIndex].messages[i].date;
            this.authorInfo = `Mittente: ${author}`;
            this.dateInfo = `Data/Tempo: ${d}`;
        },

        //take msg index and reset author and date, change boolean value of menu property
        menu(i){
            this.menuIndex = i;
            this.msgOpt = !this.msgOpt;
            this.authorInfo = '';
            this.dateInfo = '';
            this.contacts[this.activeChatIndex].messages[i].menu = !this.contacts[this.activeChatIndex].messages[i].menu
        },

        // take the active chat index, choose the "messages" property and replace it with an empty array
        deleteAllMessages(){
            this.contacts[this.activeChatIndex].messages = [];
            this.show = false;
            
        },

        // take the active chat index and delete from the main array of contacts
        deleteChat(){
            this.contacts.splice([this.activeChatIndex], 1)
            this.show = false;
        },

        

    },
    mounted() {
        
    },
})
app.mount('#app');

