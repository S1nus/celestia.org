import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

import { seoContent } from "../../datas/glossary/seoContent";
import SEO from "../../components/seo";

const title = 'Block header';


class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>The header of a block that contains a list of relevant metadata. This typically includes a Merkle root of the transactions in the block body, the hash of the previous block, the block height, and the timestamp, among others. The contents of the block header will also vary by sybil resistance mechanism (PoW or PoS) and by the specifications of the individual blockchain.
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
