import React from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import PostCell from "../../components/postCell/PostCell";
import spaceshipIllustration from "../../assets/spaceshipIllustration.svg";
import styles from "./posts.module.scss";
import testpostcellimage from "../../assets/testpostcellimage.svg";

export default function Posts(): JSX.Element {
  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.headingContainer}>
        <div className={styles.pageHeadingContainer}>
          <div className={styles.pageTitleContainer}>
            <h1 className={styles.pageTitle}>Posts and articles zone</h1>
            <div className={styles.pageExplanation}>
              While working on my projects, i will simply make sidenotes about problems i encounter as a developer or problems i believe any programmer of any knowledge level might encounter, then i develop these sidenotes into posts that i can sahre them with you !
            </div>
          </div>
          <div>
            <img src={spaceshipIllustration} alt={"posts and articles page"} />
          </div>
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
      </div>
    </PageLayout>
  );
}
