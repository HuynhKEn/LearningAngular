import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router'
import {IfPipe} from '../../pipe/if.pipe'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ["machine.png", "python.png", "deeplearning.jfif"].map((n) => `../../../assets/images/${n}`);
  images_famework = ["caffe-deep-learning.jpg", "pytorch.jpg", "Tensorflow-.webp"].map((n) => `../../../assets/images/${n}`);
  videos = [
            {id:1,link:"../../../assets/videos/demo.mp4",title:""},
            {id:2,link:"../../../assets/videos/demo.mp4",title:""},
            {id:3,link:"../../../assets/videos/demo.mp4",title:""},
            {id:4,link:"../../../assets/videos/demo.mp4",title:""},
            {id:5,link:"../../../assets/videos/demo.mp4",title:""},
          ]
  videos_tranforms = []
  colorTicTac = true;
  changeColor = setInterval( ()=> this.colorTicTac = !this.colorTicTac, 5000);

  posts : any[] = [{
    title:"Numpy",
    content:"Numpy là một thư viện lõi phục vụ cho khoa học máy tính của Python, hỗ trợ cho việc tính toán các mảng nhiều chiều, có kích thước lớn, hỗ trợ các hàm đã được tối ưu áp dụng lên các mảng nhiều chiều. Numpy đặc biệt hữu ích khi thực hiện các hàm liên quan tới Đại Số Tuyến Tính. Để cài đặt numpy nếu bạn có Anaconda chỉ cần gõ",
    id_parent:1
  }]

  topics : any[] = [{
    id: 1,
    title:"Machine learning",
    content:" Những năm gần đây, AI - Artificial Intelligence(Trí Tuệ Nhân Tạo),và cụ thể hơn là Machine Learning (Học Máy hoặc Máy Học)nổi lên như một bằng chứng của cuộc cách mạng công nghiệp lần thứ tư (1 - động cơ hơi nước, 2 - năng lượng điện, 3 - công nghệ thông tin). Trí Tuệ Nhân Tạo đang len lỏi vào mọi lĩnh vực trong đời sống mà có thể chúng ta không nhận ra. Xe tự hành của Google và Tesla, hệ thống tự tag khuôn mặt trong ảnh của Facebook, trợ lý ảo Siri của Apple, hệ thống gợi ý sản phẩm của Amazon, hệ thống gợi ý phim của Netflix, máy chơi cờ vây AlphaGo của Google DeepMind, …, chỉ là một vài trong vô vàn những ứng dụng của AI/Machine Learning.",
    see_more: {link:"https://www.facebook.com/marketplace/?ref=app_tab", content:"(Xem thêm Jarvis - trợ lý thông minh cho căn nhà của Mark Zuckerberg)"},
    quote : {link:"https://machinelearningcoban.com/2016/12/26/introduce/",content:"Trích dẫn: Machine Learning cơ bản"}
  },
  {
    id: 2,
    title:"Deep learing",
    content:"Chỉ một vài năm trước, không có nhiều nhà khoa học học sâu (deep learning) phát triển các sản phẩm và dịch vụ thông minh tại các công ty lớn cũng như các công ty khởi nghiệp. Khi người trẻ nhất trong nhóm tác giả chúng tôi tiến vào lĩnh vực này, học máy (machine learning) còn chưa xuất hiện thường xuyên trên truyền thông. Cha mẹ chúng tôi còn không có ý niệm gì về học máy chứ chưa nói đến việc hiểu tại sao chúng tôi theo đuổi lĩnh vực này thay vì y khoa hay luật khoa. Học máy từng là một lĩnh vực nghiên cứu tiên phong với chỉ một số lượng nhỏ các ứng dụng thực tế. Những ứng dụng như nhận dạng giọng nói (speech recognition) hay thị giác máy tính (computer vision), đòi hỏi quá nhiều kiến thức chuyên biệt khiến chúng thường được phân thành các lĩnh vực hoàn toàn riêng mà trong đó học máy chỉ là một thành phần nhỏ. Các mạng nơ-ron (neural network), tiền đề của các mô hình học sâu mà chúng ta tập trung vào trong cuốn sách này, đã từng bị coi là các công cụ lỗi thời. Chỉ trong khoảng năm năm gần đây, học sâu đã mang đến nhiều bất ngờ trên quy mô toàn cầu và dẫn đường cho những tiến triển nhanh chóng trong nhiều lĩnh vực khác nhau như thị giác máy tính, xử lý ngôn ngữ tự nhiên (natural language processing), nhận dạng giọng nói tự động (automatic speech recognition), học tăng cường (reinforcement learning), và mô hình hoá thống kê (statistical modeling). Với những tiến bộ này, chúng ta bây giờ có thể xây dựng xe tự lái với mức độ tự động ngày càng cao (nhưng chưa nhiều tới mức như vài công ty đang tuyên bố), xây dựng các hệ thống giúp trả lời thư tự động khi con người ngập trong núi email, hay lập trình phần mềm chơi cờ vây có thể thắng cả nhà vô địch thế giới, một kỳ tích từng được xem là không thể đạt được trong nhiều thập kỷ tới. Những công cụ này đã và đang gây ảnh hưởng rộng rãi tới các ngành công nghiệp và đời sống xã hội, thay đổi cách tạo ra các bộ phim, cách chẩn đoán bệnh và đóng một vài trò ngày càng tăng trong các ngành khoa học cơ bản – từ vật lý thiên văn tới sinh học.",
    see_more: {link:"", content:""},
    quote : {link:"https://d2l.aivivn.com/chapter_preface/index_vn.html",content:"Trích dẫn: Đắm mình trong học sâu"}
  },
  {
    id:3,
    title:"Computer Visions",
    content:"",
    see_more: {link:"", content:""},
    quote : {link:"",content:""}
  }
]


  constructor(config: NgbCarouselConfig,private router:Router,private sanitizer: DomSanitizer) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
    // this.videos.forEach(x => this.videos_tranforms.push({id:x.id,link:this.sanitizer.bypassSecurityTrustResourceUrl(x.link)}))
  }
  redirect(post){
    this.router.navigate(['post'], {
      state:{res:post}
    });
  }

}
