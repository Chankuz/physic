

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
        title: 'พลังงานของโฟตอน',
        content: 'พลังงานของแสงหรือโฟตอนขึ้นกับความถี่ของแสง ยิ่งความถี่สูง พลังงานยิ่งมาก ใช้ในการอธิบายการปล่อยและดูดกลืนแสงของอะตอม ข้อสังเกต : พลังงานควอนตัมมีค่าน้อยมากเนื่องจากค่าคงที่ของพลังค์มีค่าน้อย h = 6.63 x 10⁻³⁴ Js',
        formula: 'E = hf',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4ysrP91wMa2fKZgwAmsba_CeUDpRNZvpmA&s'
    },
    {
        id: 'learn-6',
        index: 5,
        title: 'ความสัมพันธ์ของความยาวคลื่น',
        content: 'สมการ c = fλ คือความสัมพันธ์พื้นฐานของคลื่นแม่เหล็กไฟฟ้า โดย c คืออัตราเร็วแสงในสุญญากาศ (3 x 10^8 เมตร/วินาที), f คือความถี่ (Hz), และ λ คือความยาวคลื่น (เมตร) สมการนี้แสดงให้เห็นว่าความถี่และความยาวคลื่นแปรผกผันกัน นั่นคือถ้าความถี่สูงขึ้น ความยาวคลื่นจะสั้นลง',
        formula: 'c = fλ',
        img: 'https://www.shutterstock.com/image-illustration/physics-equation-template-icon-260nw-1990582805.jpg'
    },
    {
        id: 'learn-7',
        index: 6,
        title: 'พลังงานระดับอะตอมไฮโดรเจน',
        content: 'พลังงานระดับอะตอมไฮโดรเจนที่ E = -13.6 (eV) คือพลังงานของอิเล็กตรอนในวงโคจรชั้นในสุด (n=1) เรียกว่า "สถานะพื้น (ground state)" ซึ่งเป็นสภาวะที่อะตอมมีพลังงานต่ำสุดและเสถียรที่สุด ค่าติดลบแสดงถึงอิเล็กตรอนถูกยึดเหนี่ยวไว้กับนิวเคลียส และต้องใช้พลังงานอย่างน้อย 13.6 eV เพื่อปลดปล่อยอิเล็กตรอนให้เป็นอิสระ (Ionization Energy).',
        formula: 'Eₙ = -13.6 / n² (eV)',
        img: 'https://worawitbas.wordpress.com/wp-content/uploads/2013/02/1-338.jpg'
    },
    {
        id: 'learn-8',
        index: 7,
        title: 'สูตรไรด์เบิร์ก',
        content: 'ใช้คำนวณความยาวคลื่นของสเปกตรัมเส้นของอะตอมไฮโดรเจน เมื่ออิเล็กตรอนเปลี่ยนระดับพลังงาน R = 1.097 x 10^7 m^-1 (ค่าคงที่ไรด์เบิร์ก)',
        formula: '1/λ = R(1/n₁² − 1/n₂²)',
        img: 'https://www.scimath.org/images/2017/lesson/7437/7437-6.jpg'
    },
    {
        id: 'learn-9',
        index: 8,
        title: 'โมเมนตัมเชิงมุม (โบร์)',
        content: 'ทฤษฎีของนีลส์ โบร์กำหนดว่าโมเมนตัมเชิงมุมของอิเล็กตรอนมีค่าไม่ต่อเนื่อง เป็นจำนวนเท่าของค่าคงที่พลังค์ลดรูป',
        formula: 'L = mvr = nħ',
        img: 'https://www.chulatutor.com/blog/wp-content/uploads/2022/03/%E0%B8%97%E0%B8%A4%E0%B8%A9%E0%B8%8E%E0%B8%B5%E0%B8%AD%E0%B8%B0%E0%B8%95%E0%B8%AD%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B9%8C.png'
    },
    {
        id: 'learn-10',
        index: 9,
        title: 'สมการโฟโตอิเล็กทริก',
        content: 'สมการโฟโตอิเล็กทริก (Photoelectric Equation) คือสมการที่อธิบายพลังงานของโฟตอนที่ตกกระทบผิวโลหะ ซึ่งจะถูกเปลี่ยนเป็นพลังงานในการดึงอิเล็กตรอนออกมา (ฟังก์ชันงาน) และพลังงานจลน์สูงสุดของอิเล็กตรอนที่หลุดออกมา',
        formula: 'E = hf = W₀ + Ekₘₐₓ',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jtoo9LwNnxg?si=7VbzgM7OyGJWfbN9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id: 'learn-11',
        index: 10,
        title: 'สมการเดอ บรอยล์ (de Broglie Equation)',
        content: 'เดอ บรอยล์ได้อธิบายสมมติฐานของโบร์ว่า การโคจรของอิเล็กตรอนรอบนิวเคลียสไม่เกิดการแผ่คลื่นแม่เหล็กไฟฟ้าออกมา เนื่องจากอิเล็กตรอนที่เคลื่อนที่รอบนิวเคลียสแสดงสมบัติเป็นคลื่นนิ่งได้ โดยมีความยาวเส้นรอบวงของวงโคจรมีค่าเป็นจำนวนเต็มเท่าของความยาวคลื่นของอิเล็กตรอน',
        formula: 'λ = h / p = h / mv',
    },
    {
        id: 'learn-12',
        index: 11,
        title: 'ฟังก์ชันงาน',
        content: 'อิเล็กตรอนถูกยึดเหนี่ยวด้วยพลังงานภายในอะตอมของสสาร การจะดึงอิเล็กตรอนออกจากผิวโลหะต้องใช้พลังงานอย่างน้อยค่าหนึ่ง ซึ่งเรียกว่า “ฟังก์ชันงาน (work function)”หากพลังงานของโฟตอนที่ตกกระทบมีค่า น้อยกว่า ฟังก์ชันงาน (hf<W) หรือ (f<f0)อิเล็กตรอนจะ ไม่หลุดออกมาหากพลังงานของโฟตอนที่ตกกระทบมีค่า มากกว่าหรือเท่ากับ ฟังก์ชันงาน (hf≥ W) หรือ (f≥ f0) อิเล็กตรอนจะ หลุดออกมาจากผิวโลหะได้',
        formula: 'W₀ = hf₀',
        img: "https://www.smartmathpro.com/wp-content/uploads/2025/12/atomic-physics-18-1024x683.webp"
    },
    {
        id: 'learn-13',
        index: 12,
        title: 'Complete',
        content: 'Complete',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgece7TzDiT_UF9BIp3DpCODuMVUYkL9xknw&s"
    }

];
