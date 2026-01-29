

// Re-using Level interface for simplicity, though 'question'/'options' might be unused or repurposed
// Actually, let's define a simpler interface for Learning Levels or make Level flexible
export interface LearningLevel {
    id: string;
    index: number;
    title: string;
    content: string; // The educational text
    video?: string;
    formula?: string;
    img?: string;
}

export const learningLevels: LearningLevel[] = [
    {
        id: 'learn-1',
        index: 0,
        title: 'บทนำสู่ฟิสิกส์อะตอม',
        content: 'ฟิสิกส์อะตอม คือ สาขาพื้นฐานที่มุ่งเน้นการทำความเข้าใจโครงสร้างภายในของอะตอมและองค์ประกอบต่าง ๆ ที่ประกอบขึ้นเป็นอะตอม การจัดเรียงตัวของอิเล็กตรอนรอบนิวเคลียส อันตรกิริยาระหว่างอะตอมกับสิ่งอื่น ๆ จนเกิดเป็นทฤษฎีเกี่ยวกับอะตอมต่าง ๆ มากมายในเวลาต่อมา',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3esx20XioMc?si=jGzmnMXUD-pbb3q-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: 'learn-2',
        index: 1,
        title: 'โปรตอน',
        content: 'โปรตอนเป็นอนุภาคที่มีประจุไฟฟ้าเป็นบวก อยู่ภายในนิวเคลียส จำนวนโปรตอนเป็นตัวกำหนดชนิดของธาตุ เช่น มีโปรตอน 6 ตัว คือธาตุคาร์บอน',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/e9GuJUaX0UM?si=g2PglJaswzl6L8zn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: 'learn-3',
        index: 2,
        title: 'นิวตรอน',
        content: 'นิวตรอนเป็นอนุภาคที่ไม่มีประจุไฟฟ้า อยู่ในนิวเคลียสเช่นเดียวกับโปรตอน มีหน้าที่ช่วยยึดนิวเคลียสให้อยู่รวมกัน แม้ว่าโปรตอนจะผลักกันเองก็ตาม',
    },
    {
        id: 'learn-4',
        index: 3,
        title: 'อิเล็กตรอน',
        content: 'อิเล็กตรอนเป็นอนุภาคที่มีประจุไฟฟ้าเป็นลบ เคลื่อนที่รอบนิวเคลียส มีมวลเล็กมากเมื่อเทียบกับโปรตอนและนิวตรอน และมีบทบาทสำคัญในการเกิดพันธะเคมี',
    },
    {
        id: 'learn-5',
        index: 4,
        title: 'ชั้นพลังงานของอิเล็กตรอน',
        content: 'อิเล็กตรอนจะอยู่ในระดับพลังงานหรือ “ชั้นพลังงาน” รอบนิวเคลียส โดยชั้นพลังงานแรกบรรจุอิเล็กตรอนได้ 2 ตัว และชั้นพลังงานที่สองบรรจุได้ 8 ตัว',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/u4ji0z4grTU?si=HhgNYkk19tYZMJLy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id: 'learn-6',
        index: 5,
        title: 'มวลอะตอม',
        content: 'มวลของอะตอมส่วนใหญ่อยู่ที่นิวเคลียส ซึ่งประกอบด้วยโปรตอนและนิวตรอน อิเล็กตรอนมีมวลน้อยมากเมื่อเทียบกับอนุภาคเหล่านี้',
    },
    {
        id: 'learn-7',
        index: 6,
        title: 'ไอออน',
        content: 'ไอออนคืออะตอมที่สูญเสียหรือได้รับอิเล็กตรอน ทำให้อะตอมมีประจุไฟฟ้า ถ้าเสียอิเล็กตรอนจะเป็นไอออนบวก (แคตไอออน) และถ้าได้รับอิเล็กตรอนจะเป็นไอออนลบ (แอนไอออน)',
    },
    {
        id: 'learn-8',
        index: 7,
        title: 'อิเล็กตรอนเวเลนซ์',
        content: 'อิเล็กตรอนเวเลนซ์คืออิเล็กตรอนที่อยู่ในชั้นพลังงานนอกสุด มีบทบาทสำคัญในการกำหนดการเกิดปฏิกิริยาเคมีและการเกิดพันธะกับอะตอมอื่น',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YbpsDiTBejI?si=YSzBqc685pEqKuv2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id: 'learn-9',
        index: 8,
        title: 'กัมมันตรังสี',
        content: 'นิวเคลียสบางชนิดไม่เสถียรและจะปล่อยพลังงานออกมาเพื่อทำให้ตัวเองเสถียร กระบวนการนี้เรียกว่ากัมมันตรังสี ซึ่งมีการสลายตัวแบบแอลฟา เบตา และแกมมา',
    },
    {
        id: 'learn-10',
        index: 9,
        title: 'นิวเคลียร์ฟิชชัน',
        content: 'นิวเคลียร์ฟิชชันคือกระบวนการที่นิวเคลียสขนาดใหญ่แตกออกเป็นนิวเคลียสที่เล็กกว่า พร้อมกับปลดปล่อยพลังงานจำนวนมหาศาล ซึ่งเป็นหลักการทำงานของโรงไฟฟ้านิวเคลียร์',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5jDFqpoTgDo?si=m_kyMusIjlCQQwRd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id: 'learn-11',
        index: 10,
        title: 'การแผ่คลื่นแม่เหล็กไฟฟ้าของวัตถุดำ',
        content: 'จากการทดลองพบว่า วัตถุทุกชนิด ไม่ว่าจะเป็นของแข็ง ของเหลว หรือแก๊ส หากมีอุณหภูมิสูงกว่าศูนย์องศาสัมบูรณ์ (0 K)(0 K) จะแผ่คลื่นแม่เหล็กไฟฟ้าออกมาเสมอ โดยคลื่นแม่เหล็กไฟฟ้าที่แผ่ออกมานั้นมีความถี่ต่อเนื่อง เรียกว่า สเปกตรัมต่อเนื่อง และมีความยาวคลื่นสูงสุด (λmax) ดังรูป',
        img: 'https://www.smartmathpro.com/wp-content/uploads/2025/12/atomic-physics-2-2048x1366.webp'
    },
    {
        id: 'learn-12',
        index: 11,
        title: 'ทฤษฎีอะตอมของโบร์',
        content: 'แบบจำลองอะตอมแนวคิดเกี่ยวกับโครงสร้างอะตอมได้พัฒนามาอย่างต่อเนื่อง ตามหลักฐานการทดลองที่ค้นพบใหม่ ๆ ในแต่ละยุคสมัย โดยสามารถสรุปการเปลี่ยนแปลงที่สำคัญของแบบจำลองได้ดังนีแแบบจำลองอะตอมในยุคแรกถูกเสนอโดย จอห์น ดอลตัน โดยระบุว่าอะตอมเป็นเพียง ทรงกลมตัน ที่เล็กที่สุด ไม่ได้สามารถแบ่งแยกและทำลายได้ ซึ่งอะตอมของธาตุชนิดเดียวกันจะมีสมบัติเหมือนกัน แต่จะมีสมบัติต่างจากอะตอมของธาตุอื่น อย่างไรก็ตาม แบบจำลองนี้ไม่สามารถอธิบายการมีอยู่ของอนุภาคที่มีประจุไฟฟ้าภายในอะตอมได้',
        img: 'https://www.smartmathpro.com/wp-content/uploads/2025/12/atomic-physics-5-2048x1366.webp'
    },
    {
        id: 'learn-13',
        index: 12,
        title: 'ทฤษฎีอะตอมของนีลส์ โบร์',
        content: 'อิเล็กตรอนเคลื่อนที่เป็นวงกลมรอบนิวเคลียสโดยไม่ปล่อยพลังงานในรูปคลื่นแม่เหล็กไฟฟ้าออกมา ในวงโคจรที่เสถียรนี้ อิเล็กตรอนจะมีโมเมนตัมเชิงมุมคงตัว โดยเป็นจำนวนเท่าของ h h-',
        formula: 'L = mvr = nhL | \\(L = mvr = nhL\\)',
        img: 'https://www.smartmathpro.com/wp-content/uploads/2025/12/atomic-physics-6-2048x1366.webp'
    },
    {
        id: 'learn-14',
        index: 13,
        title: 'ปรากฏการณ์โฟโตอิเล็กทริก',
        content: 'ปรากฏการณ์โฟโตอิเล็กทริก (photoelectric effect) เป็นปรากฏการณ์ที่อิเล็กตรอนหลุดจากผิวโลหะเมื่อมีแสงที่มีความถี่เหมาะสมมาตกกระทบโดยเรียกอิเล็กตรอนที่หลุดออกมานี้ว่า โฟโตอิเล็กตรอน (photoelectron) และเกิดกระแสโฟโตอิเล็กตรอน (photoelectric current) ถูกค้นพบโดย ไฮน์ริช รูดอล์ฟ แฮทซ์ (Heinrich Rudolf Hertz)',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jtoo9LwNnxg?si=injJJZ8Y3Cw65Ecw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        img: 'https://www.smartmathpro.com/wp-content/uploads/2025/12/atomic-physics-12-2048x1366.webp'
    },

];
