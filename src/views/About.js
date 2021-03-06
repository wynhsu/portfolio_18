import React from 'react';
import Navbar from '../components/Navbar';
import constants from '../components/constants';

export default class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        let background = {
            backgroundColor: '#edeef0'
        };
        return (
            <div>
                <Navbar />
                <div className='jumbotron jumbotron-fluid'>
                    <div className='void'>
                        <h2>"If you aren't failing every now and then, you're probably playing it too safe."</h2>
                        <h5> - Woody Allen</h5>
                    </div>
                </div>
                <div className='whitespace' style={background}>
                    <div className='container'>
                        <img className='d-block mx-auto' id='about' src={constants.images.profile} alt="profile" />
                        <h2 className='text-center pb-0'>Wynston Hsu</h2>
                        <p className='text-center sub'>許惟恩</p>
                        <div className='pt-0'>
                            <p className='void'>I am a Junior Informatics student at the University of Washington. As my interest lie in both Human-Computer Interaction and Data Science, I strive to become a design technologist to bridge the gap between design and development. Creative freedom is something I value deeply, and seeing other's creative work has always inspired me to push myself and do the same. On my own time, I enjoy tackling personal graphics design projects.</p>
                            <p className='void'>Growing up I was exposed to a variety of cultures and values. While I was born in Washington D.C., I moved to Taiwan months after and lived there for eleven-years, until I moved back to the US and settled in Washington. I grew up learning a mix of English, Mandarin, and the local Taiwanese dialect. Because of my  upbringing, I enjoy viewing things from different perspectives. I find it easy to empathize with the thoughts, experiences, and emotions of others. This skill has been crucial to my career as a designer, and is why I chose the title <i>Creating Through Empathy</i>.</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}