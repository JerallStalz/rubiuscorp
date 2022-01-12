import Image from 'next/image'
import { Banner, SpecialCollection, Collection, CollectionItem, CollectionImage } from '../components/styled-index'

const Home = () => {
  return (
    <div>
    <Banner>
      <Image src='/images/banner.png' layout='fill'/>
    </Banner>
    <SpecialCollection>
      <figure>
        <Image src='/images/logourban-v2.jpg' layout='fill'/>
      </figure>
      <Collection bg='#000' color='#fff' stc='#bbb'>
        <CollectionItem>
          <CollectionImage>
            <figure>
            <Image layout='fill' src='/images/collections/madkat-urban/CopiadeMadKat_ViniloBrick_Camiseta_WetSand_600x.jpg'/>
            </figure>
            <figure>
              <Image layout='fill' src='/images/collections/madkat-urban/CopiadeMadKat_ViniloBrick_Camiseta_Charcoal_600x.jpg'/>
            </figure>
          </CollectionImage>
          <span>
            MAD KAT URBAN MOSAIC - CAMISETA
          </span>
          <p>€34.99</p>
        </CollectionItem>
        <CollectionItem>
          <CollectionImage>
            <figure>
              <Image layout='fill' src='/images/collections/madkat-urban/CopiadeMadKat_Patron_Camiseta_Black_600x.jpg'/>
            </figure>
            <figure>
              <Image layout='fill' src='/images/collections/madkat-urban/CopiadeMadKat_Patron_Camiseta_Amber_600x.jpg'/>
            </figure>
          </CollectionImage>
          <span>
            MAD KAT URBAN MOSAIC - CAMISETA
          </span>
          <p>€34.99</p>
        </CollectionItem>
      </Collection>
    </SpecialCollection>
    </div>
  )
}

export default Home
