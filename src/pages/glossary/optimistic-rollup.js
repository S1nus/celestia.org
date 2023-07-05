import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

import { seoContent } from "../../datas/glossary/seoContent";
import SEO from "../../components/seo";

const title = 'Optimistic rollup';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A type of rollup that posts its blocks to a parent chain without any cryptographic proofs that attest to their validity. The parent chain receives the block with the corresponding signatures and optimistically assumes the transactions are correct.
                </p>

                <p>If a block is suspected to be invalid, a dispute window is provided where the blocks are open to be challenged. If a block is challenged, a fraud proof will be used to verify whether it is invalid. Once the dispute window has closed, the block is considered final and no new challenges can be made.
                </p>

                <p>Read more about <a href="https://coinmarketcap.com/alexandria/article/optimistic-rollups-for-the-rest-of-us/">optimistic rollups</a>.
                </p>

            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <SEO
                    title={'Celestia - '+title}
                    description={seoContent.description}
                    image={seoContent.image}
                />
                <div className={'glossary-subpage'}>
                    <main>
                        <div className={'container'}>
                            <BreadCrumb title={title}/>
                            <h1 className={'main mb-4'}>{title}</h1>

                            <SocialShare title={title} url={this.props.location.href}/>

                            <GlossaryContent/>

                        </div>

                        <div className={'container wide'}>
                            <GlossaryNav url={this.props.location.state && this.props.location.state.url}/>
                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default GlossarySubpage
