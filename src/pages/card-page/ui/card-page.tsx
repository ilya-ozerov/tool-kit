import { FC, useEffect } from "react";
import styles from "./card-page.module.scss";
import { useUnit } from "effector-react";
import {
    $isPendingSingleRepository,
    $repository,
    getSingleRepositoryFx,
} from "../model/single-repo-store";
import { Cell, Loader } from "shared";
import { useParams } from "react-router-dom";

const CardPage: FC = () => {
    const repository = useUnit($repository);
    const isPendingSingleRepository = useUnit($isPendingSingleRepository);
    const params = useParams<{
        owner: string;
        name: string;
    }>();

    const getSingleRepository = useUnit(getSingleRepositoryFx);

    useEffect(() => {
        if (params.owner && params.name)
            getSingleRepository({
                ownerLogin: params.owner,
                repositoryName: params.name,
            });
    }, [getSingleRepository, params]);

    if (isPendingSingleRepository) return <Loader />;

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={repository?.owner.avatarUrl} alt="repository owner" />
            </div>
            <div className={styles.info}>
                <Cell label="Name" value={repository?.name} />
                <Cell
                    label="Stars"
                    value={String(repository?.stargazerCount)}
                />
                <Cell
                    label="Last commit"
                    type="date"
                    value={
                        repository?.defaultBranchRef?.target.history.nodes[0]
                            ?.committedDate
                    }
                />
                <Cell
                    label="Owner"
                    type="link"
                    value={repository?.owner.login}
                    linkTo={repository?.owner.url}
                />
                <Cell
                    label="Languages"
                    value={repository?.languages.edges
                        .map((lang) => lang.node.name)
                        .join(", ")}
                />
                <Cell label="Description" value={repository?.description} />
            </div>
        </div>
    );
};

export default CardPage;
