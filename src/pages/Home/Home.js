import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './Home.scss';
import bannerImg from '../../assets/images/banner-home.png';


function Home({housing}) {

    return (
        <main className='main'>
            <Banner banner={bannerImg} showText={true} filterOpacity={0.6} boxShadow={true}></Banner>
            <section>
                <Card housing={housing}></Card>
            </section>
        </main>
    );
};

export default Home;