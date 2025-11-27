interface Props {
    title: string;
    children: React.ReactNode;
}

const BaseContainer = (props: Props) => {
    return (
        <div style={{ width: '100%' }}>
            <h2>{props.title}</h2>
            <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '10px', width: '100%', boxSizing: 'border-box' }}>
                {props.children}
            </div>
        </div>
    )
}

export default BaseContainer;