import {Person, PersonNumber} from '../components/ColumnEntry';
import {
  ADD_PERSON_TO_PEOPLE_LIST,
  REMOVE_PERSON_FROM_PEOPLE_LIST,
} from '../redux/types';

const people: Array<Person> = [
  {
    id:123,
    name: `Alister Dorsey`,
    number: {prefix: `054`, number: `5156478`},
    description: `Dolor sit amet`,
    favorite: true,
  },
  {
    id:565,
    name: `Terrell Derrick`,
    number: {prefix: `057`, number: `5472113`},
    description: `Curabitur sagittis`,
    favorite: false,
  },
];

type StoreType = {
  people: Array<Person>;
  name: string;
  currentNumber: PersonNumber;
  currentMessage: string;
  favorite: boolean;
  personId: number | null,
};


type Payload = {
    people?: Array<Person>;
    name?: string;
    currentNumber?: PersonNumber;
    currentMessage?: string;
    favorite?: boolean;
    personId?: number,
  };

const initialState: StoreType = {
  people: people,
  name: 'default value name need to change this!',
  currentNumber: {prefix: '', number: ''},
  currentMessage: '',
  favorite: false,
  personId: null,
};

export default function authReducer(
  state = initialState,
  action: {type: any; payload: StoreType},
) {
  switch (action.type) {
    case ADD_PERSON_TO_PEOPLE_LIST:
      return {
        ...state,
        people: [
          ...state.people ,
          {
            id: Math.floor(Math.random() * 100),
            name: state.name,
            number: action.payload.currentNumber,
            description: action.payload.currentMessage,
            favorite: action.payload.favorite,
          },
        ],
      };
    case REMOVE_PERSON_FROM_PEOPLE_LIST:
        return {
            ...state,
            people: state.people.filter(person => person.id !== action.payload.personId),
        }
    default:
      return state;
  }
}
