import "./Viewer.css"
import { emotionList } from "../util";

const Viewer = ({content,emotionId}) => {
const emotionItem = emotionList.find((it) => it.id === emotionId);


    return (
        <div className="Viewer">
            <section>
                <h4>오늘의 감정</h4>
                <div
                    className={[
                        "emotion_img_wrapper",
                        `emotion_img_wrapper_${emotionId}`,
                    ].join(" ")}
                    />
            </section>
            <img alt={emotionItem.name} src={emotionItem.img} />
            <div className="emotion_descript">{emotionItem.id}</div>
        </div>
    ) 
};

export default Viewer;