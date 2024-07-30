import { FC } from "react";
import {
    Button,
    Cell,
    Icon,
    IconButton,
    Input,
    Loader,
    Paginator,
    TestBlock,
} from "shared";
import styles from "./test-page.module.scss";

export const TestPage: FC = () => {
    return (
        <div className={styles.test_page}>
            <TestBlock title="Button">
                <Button>Regular</Button>
                <Button variant="primary">Regular</Button>
            </TestBlock>

            <TestBlock title="Cell">
                <Cell label="Regular" value="value" />
                <Cell label="Date" value="2021-11-11T14:26:04Z" type="date" />
                <Cell
                    label="Link"
                    value="https://github.com/"
                    type="link"
                    linkTo="https://github.com/"
                    linkTarget="_blank"
                />
            </TestBlock>

            <TestBlock title="Icon">
                <Icon icon="search" />
                <Icon icon="person" />
            </TestBlock>

            <TestBlock title="IconButton">
                <IconButton icon="search" />
                <IconButton icon="person" />
            </TestBlock>

            <TestBlock title="Input">
                <Input placeholder="type here..." />
                <Input value="hello" />
            </TestBlock>

            <TestBlock title="Loader">
                <Loader />
            </TestBlock>

            <TestBlock title="Paginator">
                <Paginator
                    currentPage={1}
                    pageSize={0}
                    onChangePage={() => {}}
                    totalItemsCount={0}
                />
                <Paginator
                    currentPage={2}
                    pageSize={0}
                    onChangePage={() => {}}
                    totalItemsCount={0}
                />
                <Paginator
                    currentPage={10}
                    pageSize={0}
                    onChangePage={() => {}}
                    totalItemsCount={0}
                />
            </TestBlock>
        </div>
    );
};
