import Carousel from "react-simply-carousel";
import { useState } from "react";
import styles from "./styles.module.css";
import data from "../../assets/data.json";

const ProjectsCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <Carousel
            containerProps={{
                style: {
                    position: "relative",
                    /* flexDirection: "row", */
                    /* flexWrap: "nowrap", */
                    width: "100%",
                    justifyContent: "space-between",
                    userSelect: "none",
                },
            }}
            delay={100}
            autoplayDelay={1}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
                style: {
                    background: "white",
                },
            }}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
                children: ">",
                style: {
                    width: 60,
                    height: 60,
                    minWidth: 60,
                    alignSelf: "right",
                    fontSize: 32,
                    position: "absolute",
                    right: 0,
                    bottom: "50%",
                    zIndex: 1,
                    border: "none",
                    opacity: "0.9",
                    cursor: "pointer",
                    borderRadius: "20px",
                    marginRight: "10px",
                },
            }}
            backwardBtnProps={{
                children: "<",
                style: {
                    width: 60,
                    height: 60,
                    minWidth: 60,
                    alignSelf: "left",
                    fontSize: 32,
                    position: "absolute",
                    left: 0,
                    bottom: "50%",
                    zIndex: 1,
                    border: "none",
                    opacity: "0.9",
                    cursor: "pointer",
                    borderRadius: "20px",
                    marginLeft: "10px",
                },
            }}
            dotsNav={{
                show: true,
                itemBtnProps: {
                    style: {
                        height: 20,
                        width: 20,
                        borderRadius: "50%",
                        border: 0,
                        marginLeft: 5,
                        marginRight: 5,
                    },
                },
                activeItemBtnProps: {
                    style: {
                        height: 20,
                        width: 20,
                        borderRadius: "50%",
                        border: 0,
                        background: "black",
                        marginLeft: 5,
                        marginRight: 5,
                    },
                },
            }}
            itemsToShow={3}
            speed={400}
            centerMode
        >
            {data.projects.map((project) => {
                return (
                    <div key={project.name}>
                        <article className={styles.project} key={project.url}>
                            <a target="_blank" href={project.url}>
                                <img
                                    className={styles.project_image}
                                    src={project.image}
                                ></img>
                            </a>
                        </article>
                    </div>
                );
            })}
            {/* 
            {Array.from({ length: 10 }).map((item, index) => (
                <div
                    style={{
                        background: "yellow",
                        width: 300,
                        height: 300,
                        border: "30px solid white",
                        textAlign: "center",
                        lineHeight: "240px",
                        boxSizing: "border-box",
                    }}
                    key={index}
                >
                    {index}
                </div>
            ))} */}
        </Carousel>
    );
};

export default ProjectsCarousel;
