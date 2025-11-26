interface Props {
    title: string;
    children: React.ReactNode;
}

const BaseContainer = (props: Props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '10px' }}>
                {props.children}
            </div>
        </div>
    )
}

export default BaseContainer;