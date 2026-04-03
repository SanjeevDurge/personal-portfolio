import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'Tools, frameworks, and technologies I use for data science and ML engineering',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, frameworks, cloud platforms, and technologies I use for data science, machine learning, and AI engineering."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Machine Learning & AI</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://pytorch.org/">PyTorch</Link> and{' '}
                    <Link href="https://www.tensorflow.org/">TensorFlow</Link> / Keras are
                    my primary deep learning frameworks for building and training models.
                  </ListItem>
                  <ListItem>
                    <Link href="https://python.langchain.com/">LangChain</Link> and{' '}
                    <Link href="https://langchain-ai.github.io/langgraph/">LangGraph</Link>{' '}
                    for building LLM-powered applications, RAG systems, and multi-agent
                    architectures.
                  </ListItem>
                  <ListItem>
                    <Link href="https://xgboost.readthedocs.io/">XGBoost</Link> and
                    scikit-learn for traditional ML tasks like classification, regression,
                    and feature engineering.
                  </ListItem>
                  <ListItem>
                    <Link href="https://mlflow.org/">MLflow</Link> for experiment tracking,
                    model versioning, and deployment pipelines.
                  </ListItem>
                  <ListItem>
                    <Link href="https://huggingface.co/">Hugging Face</Link> Transformers
                    for NLP tasks including fine-tuning BERT, T5, and other transformer
                    architectures.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Data Engineering & Cloud</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://cloud.google.com/">Google Cloud Platform</Link>{' '}
                    (BigQuery, VertexAI, Cloud Run) is my primary cloud platform for
                    deploying ML systems at scale.
                  </ListItem>
                  <ListItem>
                    <Link href="https://azure.microsoft.com/">Azure</Link> (Azure Data
                    Lake, Azure WebApp) and{' '}
                    <Link href="https://aws.amazon.com/">AWS</Link> for cloud
                    infrastructure and deployment.
                  </ListItem>
                  <ListItem>
                    <Link href="https://spark.apache.org/docs/latest/api/python/">
                      PySpark
                    </Link>{' '}
                    and <Link href="https://airflow.apache.org/">Apache Airflow</Link> for
                    building scalable data pipelines processing millions of records daily.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.databricks.com/">Databricks</Link> for
                    collaborative notebook environments and unified analytics.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link> and{' '}
                    <Link href="https://kubernetes.io/">Kubernetes</Link> for
                    containerization and orchestration of ML services.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development & Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://code.visualstudio.com/">VS Code</Link> with Cursor
                    AI is my primary IDE for Python, SQL, and general development.
                  </ListItem>
                  <ListItem>
                    <Link href="https://jupyter.org/">Jupyter</Link> notebooks for
                    exploratory data analysis and rapid prototyping.
                  </ListItem>
                  <ListItem>
                    <Link href="https://streamlit.io/">Streamlit</Link> for building
                    interactive data apps and ML model demos.
                  </ListItem>
                  <ListItem>
                    <Link href="https://fastapi.tiangolo.com/">FastAPI</Link> for building
                    high-performance REST APIs for ML model serving.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.terraform.io/">Terraform</Link> for
                    infrastructure as code and reproducible cloud environments.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Databases & Visualization</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Graph Database</TableHeadCell>
                    <TableCell>Neo4j</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Data Warehouse</TableHeadCell>
                    <TableCell>BigQuery, Snowflake, Redshift</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Vector Database</TableHeadCell>
                    <TableCell>FAISS, Neo4j Vector</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Visualization</TableHeadCell>
                    <TableCell>Tableau, Power BI, Matplotlib, Seaborn</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Version Control</TableHeadCell>
                    <TableCell>Git, GitHub</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Languages</TableHeadCell>
                    <TableCell>Python, SQL, PySpark</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
