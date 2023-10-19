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
            autoplay={true}
            delay={10}
            autoplayDelay={3000}
            preventScrollOnSwipe
            easing="ease"
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
            speed={2500}
            centerMode
        >
            {data.projects.map((project) => {
                return (
                    <div key={project.name}>
                        <div className={styles.project} key={project.url}>
                            <a target="_blank" href={project.url}>
                                <img
                                    className={styles.project_image}
                                    src={project.image}
                                    alt={project.name}
                                ></img>
                            </a>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default ProjectsCarousel;
