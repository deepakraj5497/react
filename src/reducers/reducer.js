import Photo from '../assets/pic.jpg';

const initialState = {
 post: [
    {
 name: 'Deepak', english: 98, tamil: 95, maths: 99, science: 100, social: 100, id: 1, img: Photo, gender: 'male', section: 'A' 
}, {
 name: 'Raji', english: 90, tamil: 95, maths: 78, science: 93, social: 100, id: 2, img: Photo, gender: 'female', section: 'B' 
},
    {
 name: 'Raj', english: 90, tamil: 65, maths: 65, science: 90, social: 80, id: 3, img: Photo, gender: 'male', section: 'A' 
}, {
 name: 'Geetha', english: 87, tamil: 81, maths: 85, science: 90, social: 86, id: 4, img: Photo, gender: 'female', section: 'C' 
},
    {
 name: 'Prasath', english: 87, tamil: 88, maths: 85, science: 75, social: 86, id: 5, img: Photo, gender: 'male', section: 'A' 
}, {
 name: 'Bharathi', english: 72, tamil: 85, maths: 85, science: 90, social: 80, id: 6, img: Photo, gender: 'female', section: 'C' 
},
	{
 name: 'Ajith', english: 68, tamil: 81, maths: 80, science: 60, social: 75, id: 7, img: Photo, gender: 'male', section: 'B' 
}, {
 name: 'Gayathri', english: 80, tamil: 74, maths: 66, science: 95, social: 55, id: 8, img: Photo, gender: 'female', section: 'B' 
},
	{
 name: 'Kishore', english: 87, tamil: 51, maths: 45, science: 88, social: 86, id: 9, img: Photo, gender: 'male', section: 'C' 
}, {
 name: 'Ajay', english: 87, tamil: 51, maths: 85, science: 60, social: 86, id: 10, img: Photo, gender: 'male', section: 'C' 
},
	{
 name: 'Sujatha', english: 87, tamil: 51, maths: 95, science: 90, social: 86, id: 11, img: Photo, gender: 'female', section: 'A' 
}
    ],
add: true,
name: '',
english: '',
tamil: '',
maths: '',
science: '',
social: '',
id: '',
index: '',
pageSize: 5,
duplicate: '',
duplicate2: '',
currentPage: 0,
active: 0,
sortOn: false,
direction: 'asc',
className1: false,
className2: false,
nameClass: false,
englishClass: false,
tamClass: false,
mathClass: false,
sciClass: false,
socClass: false,
totalClass: false,
rankClass: false,
key: '',
nameCheck: 'form-control',
englishCheck: 'form-control',
tamilCheck: 'form-control',
mathsCheck: 'form-control',
scienceCheck: 'form-control',
socialCheck: 'form-control',
success: '',
edit: '',
addRedirect: '',
gender: 'male',
department: 'A' 
};

const reducerExample = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_POST': {
                const newData = state.duplicate.filter((post) => action.id !== post.id);
                const newData2 = state.duplicate2.filter((post) => action.id !== post.id);
            return {
                ...state,
                post: newData,
                duplicate: newData,
                duplicate2: newData2
             };
            }
        case 'INPUT_CHANGE': 
            return {
                ...state,
                [action.name]: action.value
            };
        case 'ADD_DATA': 
            return {
                ...state,
                post: action.data,
                duplicate: action.data,
                duplicate2: state.duplicate2.concat(action.newData),
                name: '',
                english: '',
                tamil: '',
                maths: '',
                science: '',
                social: '',
                gender: 'male'
            };
        case 'UPDATE_POST':
            console.log(action.data.section);
            return {
                ...state,
                name: action.data.name,
                english: action.data.english,
                tamil: action.data.tamil,
                maths: action.data.maths,
                science: action.data.science,
                social: action.data.social,
                id: action.data.id,
                gender: action.data.gender,
                section: action.data.section,
                add: false,
                index: action.data.i
            };
        case 'UPDATE_DATA': {
                const newArray = state.duplicate.filter(
                    () => state.duplicate.splice(state.index, 1, action.data)
                    );
                console.log(state.duplicate2);
             return {
                ...state,
                post: newArray,
                duplicate: newArray,
                duplicate2: state.duplicate2.map((content) => (
                    action.data.id === content.id ? { ...content, content: action.data } : content
                    )),
                add: true,
                name: '',
                english: '',
                tamil: '',
                maths: '',
                science: '',
                social: ''
            };
        }
        case 'SHOW_POST': 
            return {
                ...state,
                post: action.data
            };
        case 'DUPLICATE_POST': 
            return {
                ...state,
                duplicate: action.data,
                duplicate2: action.data
            };
        case 'CURRENT_PAGE': 
            return {
                ...state,
                currentPage: action.data
            };
        case 'ACTIVE_PAGE': 
            return {
                ...state,
                active: action.data
            };
        case 'PAGE_SIZE': 
            return {
                ...state,
                post: action.newData,
                pageSize: action.data
            };
        case 'SORT_DIRECTION': 
            return {
                ...state,
                direction: action.data
            };
        case 'SORTING': 
            return {
                ...state,
                post: action.data,
                duplicate: action.data,
                className1: action.className1,
                className2: action.className2
            };
        case 'ICON': 
            return {
                ...state,
                [action.data]: true
            };
        case 'ALL_CLASS': 
            return {
                ...state,
                nameClass: false,
                englishClass: false,
                tamClass: false,
                mathClass: false,
                sciClass: false,
                socClass: false,
                totalClass: false,
                rankClass: false,
            };
        case 'KEY': 
            return {
                ...state,
                key: action.data
            };
        case 'SORT_ON': 
            return {
                ...state,
                sortOn: action.data
            };
        case 'TOTAL_RANK': {
            return {
                ...state,
                post: state.post.forEach((content, i) => { 
                    const data = content; 
                    data.total = action.total[i];
                    data.rank = action.rank[i];
                })
            };
        }
        case 'ERROR': 
            return {
                ...state,
                [action.name]: action.data
            };
        case 'NOERROR': 
            return {
                ...state,
                nameCheck: action.data,
                englishCheck: action.data,
                tamilCheck: action.data,
                mathsCheck: action.data,
                scienceCheck: action.data,
                socialCheck: action.data
            };
        case 'SUCCESS': 
            return {
                ...state,
                success: action.data
            };
        case 'REDIRECT': 
            console.log(action.data);
            return {
                ...state,
                edit: action.data
            };
        case 'REDIRECT_ADD': 
            console.log(action.data);
            return {
                ...state,
                addRedirect: action.data
            };
        default: 
            return state;
    }
};
export default reducerExample;
