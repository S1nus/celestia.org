import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

import { seoContent } from "../../datas/glossary/seoContent";
import SEO from "../../components/seo";

const title = 'Block producer';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A full node that is responsible for producing blocks. In most blockchains, miners or validators are responsible for producing and proposing blocks when they are the leader. For rollups, block producers, also known as sequencers or operators, only build blocks with transactions, which they publish to a separate blockchain for consensus and data availability.
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
