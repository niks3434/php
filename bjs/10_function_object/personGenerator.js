const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анастасия",
            "id_3": "Анна",
            "id_4": "Ирина",
            "id_5": "Вероника",
            "id_6": "Таисия",
            "id_7": "Ульяна",
            "id_8": "Вера",
            "id_9": "Надежда",
            "id_10": "Любовь"
        }
    }`,


    patronymicJson: `{
        "count": 5,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Даниилович",
            "id_5": "Андреевич"
        } 
    }`,
    
    
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        return this.randomIntNumber() === 1 
                        ? this.GENDER_FEMALE 
                        : this.GENDER_MALE;  
    },

    randomAge: function() {
        return this.randomIntNumber(2024, 1950);
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        return this.person.gender === this.GENDER_MALE 
                        ? this.randomValue(this.firstNameMaleJson) 
                        : this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function() {
        const surname = this.randomValue(this.surnameJson);
        return this.person.gender === this.GENDER_FEMALE 
                        ? surname + "а" 
                        : surname;
    },


    randomPatronymic:  function() {
        const patronymic = this.randomValue(this.patronymicJson);
        return this.person.gender === this.GENDER_FEMALE 
                        ? patronymic.slice(0, -2) + "на" 
                        : patronymic;
    },



    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.age = this.randomAge();
        return this.person;
    }
};
