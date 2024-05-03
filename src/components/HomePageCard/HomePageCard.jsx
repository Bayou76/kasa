import datas from '../../data/data'
import Card from '../Card/Card'
import './homePageCard.scss'

function HomePageCard() {

    return (
        <main className='homePage'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

export default HomePageCard