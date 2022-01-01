import styles from "./Intro.module.scss";
import Button from "../../global/Button/Button";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <article className={styles._first_intro}>
        <div className={styles._intro_data}>
          <h2 className={styles._title}>
            Welcome to the
            <br />
            <span>Charming Chameleons</span>
          </h2>
          <p>
            The Cauligenous Chameleons is a private collection of
            3310 8-bit NFTs— unique digital collectibles programmatically
            generated using an



            &ensp;
            <a href="https://github.com/benyaminahmed/nft-image-generator" target="_blank">

              open source script.
            </a>
            &ensp;

            Chameleons are stored
            as ERC-721 tokens on the Ethereum blockchain and
            hosted on IPFS. This collection will be followed by a
            10k Chameleons avatars in the next few months.
          </p>
          <p>
            Each NFT is unique and comes with an exclusive access
            to the Cricket Bank, an early stage startup to establish
            a new bank in the metaverse and ever-growing community with
            multiple benefits. Remember the banks in MMORPG games?
            That is what we will build but with financial benefits and
            products for the real world (just like a neobank!),
            whilst creating a positive impact in the environment and
            tackle Climate Change with our donations to plant trees
            and preserve the wildlife.
          </p>
          <Button>Join the Club</Button>
        </div>
        <div className={styles._intro_img}>
          <img src="/intro.png" alt="intro img" />
        </div>
      </article>

      <article className={styles._second_intro}>
        <div className={styles._intro_img}>
          <img src="/intro.gif" alt="intro img" />
        </div>
        <div className={styles._intro_data}>
          <h2 className={styles._title}>
            <span>Cauligenous Chameleons and Cricket Bank</span> Plan Summary
          </h2>
          <p>
            We encourage all interested parties to read our roadmap and whitepaper in full. We expect and hope that by being an NFT holder you agree that you are interested in holding a Platinum account once we launch our metaverse bank. The account will be forever free for Platinum Account holders! Think of holding chameleons NFTs as having access to a free product of an early stage startup, by being an early adopter! Ever seen a crowdfunding project where they give free products to their first customers and investors? Just like that!  We are here for the full ride, we will build something massive with our community. This is almost like being an early adopter of a startup’s product.
          </p>
          <p>
            Chameleons are all about environmental impact!
          </p>
          <ul>
            <li>
              First 3310 8-bit Chameleons will be free to mint. You will only need to pay the minting fees. Creator will set a 10% royalty fee for any resales that the holder might make, of which a 5% pool will be created and be 5% of the royalties will be distributed to the holders. Of the remaining 5%, we will donate 2.5% to an environmental impact charity and 2.5% will be used for building the startup.
            </li>
            <li>
              Second batch of 10k Chameleon avatars will be available for 0.16 ETH  after a month from the launch of 8-bit NFTs. Once the investors and shareholders are paid, the remaining profit will be used to make donations to the environmental charities. In addition to covering our CO2 footprint by planting trees for the transactions, we will also donate 10% of the profits to an environmental impact charity. The remaining of the funds will be used for building the venture.
            </li>
          </ul>
          <p>
            Once all our 13,310 NFTs are minted, we will then start raising funds for our startup, Cricket Bank, to launch the first virtual bank in the metaverse! This is a long vision and will take a lot of time until we build this. Once our NFTs are minted we will start fundraising to launch a startup to build the bank!
          </p>
          <p>
            Read&ensp;
            <a href="https://onur-aydogan2.gitbook.io/cauligenous-chameleons-and-cricket-bank/" target="_blank">

              Cricket Bank
            </a>
            &ensp;and&ensp;
            <a href="https://onur-aydogan2.gitbook.io/cauligenous-chameleons-and-cricket-bank/" target="_blank">

              Whitepaper
            </a>
            &ensp;for further details!
          </p>
          {/* <Button>Read the full lore on Discord</Button> */}
        </div>
      </article>
    </div>
  );
};

export default Intro;
