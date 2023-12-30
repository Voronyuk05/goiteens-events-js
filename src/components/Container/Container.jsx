import { ListContainer } from "./Container.styled"

export function Container({children}) {
    return (
        <ListContainer>
            {children}
        </ListContainer>
    )
}