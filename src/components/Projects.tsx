import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "Enterprise Data Warehouse Modernization",
    image: "/assets/project1.jpg",
    description:
      "Designed and implemented ETL pipelines and modern data warehouse using Snowflake, Databricks, and Python, reducing manual processing by 40% and accelerating reporting by 30%.",
  },
  {
    title: "Big Data Analytics and Reporting Optimization",
    image: "/assets/project2.jpg",
    description:
      "Engineered distributed ETL pipelines with Spark, Hive, and BigQuery, handling multi-terabyte datasets and cutting processing time by 40%. Integrated a data lake to improve accessibility by 60%.",
  },
  // {
  //   title: "Real-Time Data Lakehouse Architecture",
  //   image: "/assets/project3.jpg",
  //   description:
  //     "Built a data lakehouse ecosystem combining structured and semi-structured data from various sources, improving data discovery and accessibility by 60%.",
  // },
  // {
  //   title: "BI Dashboard Automation",
  //   image: "/assets/project4.jpg",
  //   description:
  //     "Developed dynamic dashboards with Power BI and Tableau, enabling real-time KPI tracking and improving executive decision-making for faster, data-driven operations.",
  // },
  // {
  //   title: "Cloud Pipeline Automation",
  //   image: "/assets/project5.jpg",
  //   description:
  //     "Orchestrated cloud-native data ingestion using AWS Glue, Azure Data Factory, and GCP Dataflow, achieving 99.5% pipeline availability for enterprise systems.",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing data engineering solutions that drive business value
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="mySwiper pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="!w-[90%] md:!w-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl 
                         transition-all duration-300 border border-border group"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 
                             group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 
                              to-transparent opacity-60"
                  ></div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: hsl(var(--accent));
        }
        .swiper-pagination-bullet {
          background: hsl(var(--accent));
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--accent));
        }
      `}</style>
    </section>
  );
};

export default Projects;
