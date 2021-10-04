import React from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import PostCell from "../../components/postCell/PostCell";
import spaceshipIllustration from "../../assets/spaceshipIllustration.svg";
import styles from "./posts.module.scss";
import testpostcellimage from "../../assets/testpostcellimage.svg";

export default function Posts(): JSX.Element {
  return (
    <PageLayout contentMaxWidth={1100}>
      <div className={styles.headingContainer}>
        <div>
          <h1 className={styles.pageTitle}>Posts</h1>
          <div className={styles.pageExplanation}>
            I <code>#define</code> my self as a fullstack developer, i mostly work on javascript technologies, Devops,
            mobile and desktop apps and many related techs.
          </div>
        </div>
        <div>
          <img src={spaceshipIllustration} alt={"posts and articles page"} />
        </div>
      </div>
      <div className={styles.postsContainer}>
          <PostCell
            image={testpostcellimage}
            imgaeAlt={"this is image alt"}
            title={"this is post cell title"}
            tags={["javascript", "devos", "frontend", "devos", "frontend"]}
            publishDate={"08/10/2021"}
            updatedDate={"08/10/2021"}
            views={22}
            readingTime={20}
            likeInteractions={15}
            ideaIneractions={15}
            postSlug={"this-is-post-cell"}
          />
          <PostCell
            image={testpostcellimage}
            imgaeAlt={"this is image alt"}
            title={"this is post cell title"}
            tags={["javascript", "devos", "frontend", "devos", "frontend"]}
            publishDate={"08/10/2021"}
            updatedDate={"08/10/2021"}
            views={22}
            readingTime={20}
            likeInteractions={15}
            ideaIneractions={15}
            postSlug={"this-is-post-cell"}
          />
          <PostCell
            image={testpostcellimage}
            imgaeAlt={"this is image alt"}
            title={"this is post cell title"}
            tags={["javascript", "devos", "frontend", "devos", "frontend"]}
            publishDate={"08/10/2021"}
            updatedDate={"08/10/2021"}
            views={22}
            readingTime={20}
            likeInteractions={15}
            ideaIneractions={15}
            postSlug={"this-is-post-cell"}
          />
          <PostCell
            image={testpostcellimage}
            imgaeAlt={"this is image alt"}
            title={"this is post cell title"}
            tags={["javascript", "devos", "frontend", "devos", "frontend"]}
            publishDate={"08/10/2021"}
            updatedDate={"08/10/2021"}
            views={22}
            readingTime={20}
            likeInteractions={15}
            ideaIneractions={15}
            postSlug={"this-is-post-cell"}
          />
          <PostCell
            image={testpostcellimage}
            imgaeAlt={"this is image alt"}
            title={"this is post cell title"}
            tags={["javascript", "devos", "frontend", "devos", "frontend"]}
            publishDate={"08/10/2021"}
            updatedDate={"08/10/2021"}
            views={22}
            readingTime={20}
            likeInteractions={15}
            ideaIneractions={15}
            postSlug={"this-is-post-cell"}
          />
          <PostCell
            image={testpostcellimage}
            imgaeAlt={"this is image alt"}
            title={"this is post cell title"}
            tags={["javascript", "devos", "frontend", "devos", "frontend"]}
            publishDate={"08/10/2021"}
            updatedDate={"08/10/2021"}
            views={22}
            readingTime={20}
            likeInteractions={15}
            ideaIneractions={15}
            postSlug={"this-is-post-cell"}
          />
      </div>
    </PageLayout>
  );
}
