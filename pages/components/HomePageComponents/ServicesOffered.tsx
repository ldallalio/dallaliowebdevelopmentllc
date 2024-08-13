import React from 'react'

type Props = {}

const ServicesOffered = (props: Props) => {
	return <section
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            color:'black'
        }}
    >
        <h1>Services Offered</h1>
        <div>
            <div>
                <h2>Web Development</h2>
                <p>Web Development is the process of creating a website or web application. It involves creating a website from scratch, updating an existing website, or adding new features to an existing website.</p>
            </div>
            <div>
                <h2>Web Design</h2>
                <p>Web Design is the process of creating a website or web application. It involves creating a website from scratch, updating an existing website, or adding new features to an existing website.</p>
            </div>
            <div>
                <h2>SEO</h2>
                <p>SEO is the process of optimizing a website to rank higher in search engine results. It involves optimizing the website's content, structure, and code to make it more search engine friendly.</p>
            </div>
            <div>
                <h2>Content Creation</h2>
                <p>Content Creation is the process of creating content for a website or web application. It involves creating text, images, videos, and other media to engage users and promote the website.</p>
            </div>
        </div>
    </section>;
};

export default ServicesOffered;