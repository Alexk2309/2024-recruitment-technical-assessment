import '../styles/Subjects.css';
import StarRating from './StarRating';

function Subjects() {
    interface Subject {
        code: string;
        name: string;
        rating: number;
        numReviews: number;
        termsOffered: string[];
    }

    const subjectList: Subject[] = [
        {
            code: 'COMP1511',
            name: 'Programming Fundamentals',
            rating: 4.8,
            numReviews: 68,
            termsOffered: ['Term 1', 'Term 2', 'Term 3']
        },
        {
            code: 'COMP1531',
            name: 'Software Engineering Fundamentals',
            rating: 3.6,
            numReviews: 47,
            termsOffered: ['Term 1', 'Term 2', 'Term 3']
        },
        {
            code:'COMP1521',
            name: 'Computer Systems Fundamentals',
            rating: 4,
            numReviews: 40,
            termsOffered: ['Term 1', 'Term 2', 'Term 3']
        },
        {
            code:'COMP2521',
            name: 'Data Structures and Algorithms',
            rating: 4.2,
            numReviews: 36,
            termsOffered: ['Summer', 'Term 1', 'Term 2', 'Term 3']
        },
        {
            code:'COMP2511',
            name: 'Object Oriented Design & Programming',
            rating: 3.1,
            numReviews: 33,
            termsOffered: ['Term 1', 'Term 2', 'Term 3']
        },
        {
            code:'COMP3311',
            name: 'Database Systems',
            rating: 4,
            numReviews: 33,
            termsOffered: ['Term 1', 'Term 3']
        }
    ]

    return (
        <div id='subjects-container'>
        {subjectList.map((subject, index) => (
            <div key={index} className="subject-container">
            <div className='title-div'>
                <label className='code'>{subject.code}</label>
                <div className='reviews-container'>
                <StarRating rating={subject.rating}></StarRating>
                <span className='nums-reviews' style={{color: '#A7B3C8'}}>{subject.numReviews} reviews</span>
                </div>
            </div>
            <span>{subject.name}</span>
            <div className='terms-container'>
                {subject.termsOffered.map((term, index) => (
                    <div className='term-box' key={index}>{term}</div>
                ))}
            </div>
            </div>
        ))}
        </div>
    );
}

export default Subjects;
