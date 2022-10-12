<template>
  <NavigationBar />

  <h1 class="text-center m-5 m-2">Men</h1>

  <h2 class="text-center m-5">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tshirtHList" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="HoodieHList" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="pantsHList" />

  <h2 class="text-center m-5">Caps</h2>
  <HorizontalScrollComponent :articles="CapHList" />

  <PanelPhoto />
  <PutFoward2 />
  <AllLinks />
  <AboutUs />
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import NavigationBar from "../components/NavigationBar.vue";
import PutFoward2 from "../components/PutFoward2.vue";
import PanelPhoto from "../components/PanelPhoto.vue";
import AllLinks from "../components/AllLinks.vue";
import HorizontalScrollComponent from "../components/HorizontalScrollComponent.vue";

export default {
  data() {
    return {
      tshirtHList: [
        {
          id: 0,
          product: "White",
          url: "https://www.cdiscount.com/pdt2/8/7/5/1/700x700/mp57600875/rw/t-shirt-a-col-roule-pour-homme-streetwear-couleu.jpg",
          description: "A white tee-shirt",
        },
        {
          id: 1,
          product: "Kaki",
          url: "https://sc04.alicdn.com/kf/H27a849546b2d4295a51f8f4b1c90a2b9W.jpg",
          description: "A kaki tee-shirt",
        },
        {
          id: 2,
          product: "Freshniss",
          url: "https://cdn.shopify.com/s/files/1/0263/6270/8027/products/T-shirt-Oversize-Dr-Hook-tenshi-streetwear-2_800x.jpg?v=1644498948",
          description: "A red tee-shirt",
        },
        {
          id: 3,
          product: "Lines",
          url: "http://sc04.alicdn.com/kf/H75da1ab3e17e408caeda86145a246084S.jpg",
          description: "A white tee-shirt with black lines",
        },
        {
          id: 4,
          product: "Butterfly",
          url: "https://cdn.shopify.com/s/files/1/0263/6270/8027/products/tshirt-batafurai_1600x.jpg?v=1623330900",
          description: "A black tee-shirt with a butterfly",
        },
        {
          id: 5,
          product: "Black",
          url: "https://www.cdiscount.com/pdt2/2/7/8/1/550x550/mp57574278/rw/t-shirt-a-col-roule-pour-homme-streetwear-couleu.jpg",
          description: "A black tee-shirt",
        },
      ],

      pantsHList: [
        {
          id: 0,
          product: "Jean",
          url: "https://m.media-amazon.com/urls/I/71Cn7INgQQS._AC_SX679_.jpg",
          description: "A straight blue jean",
        },
        {
          id: 1,
          product: "Gray",
          url: "https://urbansapes.fr/media/catalog/product/cache/47969c47b57255357446b283e5a56cc2/p/a/pantalon-jogging-en-denim-pour-homme-baggy-streetwear-sw19114_4_.jpg",
          description: "A gray cargo",
        },
        {
          id: 2,
          product: "Kaki",
          url: "https://i.etsystatic.com/25090033/r/il/c30af8/3057108997/il_fullxfull.3057108997_mfyz.jpg",
          description: "A kaki cargo",
        },
        {
          id: 3,
          product: "Black",
          url: "https://ae01.alicdn.com/kf/H2d7b2e3c404f4b6d9b9e8ad68845efdbK/Pantalon-Cargo-uni-pour-gar-on-et-adolescent-de-4-12-ans-multi-poches-style-Streetwear.jpg_q50.jpg",
          description: "A black cargo",
        },
        {
          id: 4,
          product: "Colors",
          url: "https://www.cdiscount.com/pdt2/5/4/6/1/700x700/mp50907546/rw/minetom-jeans-homme-patchwork-couleur-bloc-denim-p.jpg",
          description: "A colorful jean",
        },
        {
          id: 5,
          product: "Blue",
          url: "https://www.dhresource.com/0x0/f2/albu/g17/M01/B1/C1/rBVa4mASstSANqqnAAJK8bss94k117.jpg",
          description: "A straight blue jean",
        },
      ],

      HoodieHList: [
        {
          id: 0,
          product: "Black",
          url: "https://cdn.shopify.com/s/files/1/0272/9059/9521/products/Sweat-shirt-hoodie-a-capuche-oversize-surdimentionne-Noir-Mixte-unisexe-pour-homme-femme-pas-cher-urb1-vetements-streetwear_620x.png?v=1611771214",
          description: "A black hoodie",
        },
        {
          id: 1,
          product: "Gray",
          url: "https://www.cdiscount.com/pdt2/7/2/6/1/700x700/mp36266726/rw/hommes-harajuku-streetwear-sweatshirts-sweat-capuc.jpg",
          description: "A gray hoodie",
        },
        {
          id: 2,
          product: "Brown",
          url: "https://cdn.shopify.com/s/files/1/0586/4220/2821/products/product-url-1810547344_600x.jpg?v=1640436244",
          description: "A brown hoodie",
        },
        {
          id: 3,
          product: "Pink",
          url: "https://cdn.shopify.com/s/files/1/0272/9059/9521/products/Sweat-shirt-hoodie-a-capuche-oversize-surdimentionne-Rose-Mixte-unisexe-pour-homme-femme-pas-cher-urb1-vetements-streetwear-2_620x.png?v=1604419469",
          description: "A pink hoodie",
        },
        {
          id: 4,
          product: "Creme",
          url: "https://www.cdiscount.com/pdt2/6/3/8/1/700x700/mp36452638/rw/hommes-harajuku-streetwear-sweatshirts-sweat-capuc.jpg",
          description: "A creme hoodie",
        },
        {
          id: 5,
          product: "Basic",
          url: "https://cdn.shopify.com/s/files/1/0272/9059/9521/products/Sweat-shirt-hoodie-a-capuche-oversize-surdimentionne-Gris-clair-Mixte-unisexe-pour-homme-femme-pas-cher-urb1-vetements-streetwear-3_620x.png?v=1604419469",
          description: "A basic gray hoodie",
        },
      ],

      CapHList: [
        {
          id: 0,
          product: "Black",
          url: "https://i.pinimg.com/originals/99/03/7d/99037dccc4cec22c8ae69ab6dbc73420.jpg",
          description: "A black cap",
        },
        {
          id: 1,
          product: "Green",
          url: "https://cache.mrporter.com/variants/urls/1647597279310358/ou/w2000_q60.jpg",
          description: "A green cap",
        },
        {
          id: 2,
          product: "Creme",
          url: "https://cdn.shopify.com/s/files/1/0581/7004/8690/products/VisieregolfecrueCommunegolf3_600x.jpg?v=1647508815",
          description: "A creme cap",
        },
        {
          id: 3,
          product: "Ornament",
          url: "https://www.dhresource.com/webp/m/0x0/f2/albu/g8/M00/2D/49/rBVaVF4Sw9uAZH0WAAc4M5zNGzA928.jpg",
          description: "A ornament black cap",
        },
        {
          id: 4,
          product: "Gray",
          url: "https://cdn.shopify.com/s/files/1/0397/0396/9949/products/vbc_alberto_bucket_hat_grey_4_1200x.jpg?v=1603189050",
          description: "A gray cap",
        },
        {
          id: 5,
          product: "Light gray",
          url: "https://cdn.shopify.com/s/files/1/0553/7100/6130/products/1940084-108.0556_650x.jpg?v=1652732985",
          description: "A light gray cap",
        },
      ],
    };
  },
  components: {
    AboutUs,
    NavigationBar,
    PutFoward2,
    PanelPhoto,
    AllLinks,
    HorizontalScrollComponent,
  },
};
</script>
