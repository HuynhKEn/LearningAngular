import { Injectable } from '@angular/core';

import { LanguageDTO } from '../models/language.dto';

export class TopicDTO {
  id: number;
  title: string;
  content: string;
  // tslint:disable-next-line:variable-name
  language: string;
}

export class PostDTO {
  id: number;
  title: string;
  content: string;
  // tslint:disable-next-line:variable-name
  id_parent: number;
  // tslint:disable-next-line:variable-name
  start_date: string;
  // tslint:disable-next-line:variable-name
  end_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor() { }
  // {'datePicker':['Begin date']}
  dataMedia(): object[]{
    const data = [
      {
        id: 1,
        link: 'https://cors-anywhere.herokuapp.com/https://bugs.python.org/file47781/Tutorial_EDIT.pdf',
        topic: '100',
        videoTime: 200,
        fileType: 'pdf',
        thumb: '',
        title: 'Tutorial_EDIT',
        startDate: '2021/01/30',
        endDate: '2021/12/30',

      },
      {
        id: 2,
        link: 'https://cors-anywhere.herokuapp.com/http://anh.cs.luc.edu/python/hands-on/3.1/Hands-onPythonTutorial.pdf',
        topic: '100', videoTime: 100,
        fileType: 'pdf',
        thumb: '',
        title: 'PythonTutorial',
        startDate: '2021/01/30',
        endDate: '2021/12/30',
      },
      {id: 3,
        link: 'https://cors-anywhere.herokuapp.com/https://alex.smola.org/drafts/thebook.pdf',
        topic: '100', videoTime: 50,
        fileType: 'pdf',
        thumb: '',
        title: 'Thebook',
        startDate: '2021/01/30',
        endDate: '2021/12/30',
      },
      {
        id: 4,
        link: '../../../assets/videos/demo.mp4',
        topic: '100', videoTime: 100,
        fileType: 'video',
        thumb: '',
        title: 'Demo Video',
        startDate: '2021/01/30',
        endDate: '2021/12/30',
      },
      {
        id: 5,
        link: '../../../assets/videos/demo.mp4',
        topic: '200', videoTime: 100,
        fileType: 'video',
        thumb: '',
        title: 'Demo Video',
        startDate: '2021/01/30',
        endDate: '2021/12/30',
      },
      {
        id: 6,
        link: '../../../assets/videos/demo.mp4',
        topic: '300',
        videoTime: 100,
        fileType: 'video',
        thumb: '',
        title: 'Demo Video',
        startDate: '2021/01/30',
        endDate: '2021/12/30',
      },
    ];
    return data;
  }
  topicsData(): TopicDTO[] {
    const topics = [
      {
        id: 2,
        title: 'Deep learning',
        content:
          'Chỉ một vài năm trước, không có nhiều nhà khoa học học sâu (deep learning) phát triển các sản phẩm và dịch vụ thông minh tại các công ty lớn cũng như các công ty khởi nghiệp. Khi người trẻ nhất trong nhóm tác giả chúng tôi tiến vào lĩnh vực này, học máy (machine learning) còn chưa xuất hiện thường xuyên trên truyền thông. Cha mẹ chúng tôi còn không có ý niệm gì về học máy chứ chưa nói đến việc hiểu tại sao chúng tôi theo đuổi lĩnh vực này thay vì y khoa hay luật khoa. Học máy từng là một lĩnh vực nghiên cứu tiên phong với chỉ một số lượng nhỏ các ứng dụng thực tế. Những ứng dụng như nhận dạng giọng nói (speech recognition) hay thị giác máy tính (computer vision), đòi hỏi quá nhiều kiến thức chuyên biệt khiến chúng thường được phân thành các lĩnh vực hoàn toàn riêng mà trong đó học máy chỉ là một thành phần nhỏ. Các mạng nơ-ron (neural network), tiền đề của các mô hình học sâu mà chúng ta tập trung vào trong cuốn sách này, đã từng bị coi là các công cụ lỗi thời. Chỉ trong khoảng năm năm gần đây, học sâu đã mang đến nhiều bất ngờ trên quy mô toàn cầu và dẫn đường cho những tiến triển nhanh chóng trong nhiều lĩnh vực khác nhau như thị giác máy tính, xử lý ngôn ngữ tự nhiên (natural language processing), nhận dạng giọng nói tự động (automatic speech recognition), học tăng cường (reinforcement learning), và mô hình hoá thống kê (statistical modeling). Với những tiến bộ này, chúng ta bây giờ có thể xây dựng xe tự lái với mức độ tự động ngày càng cao (nhưng chưa nhiều tới mức như vài công ty đang tuyên bố), xây dựng các hệ thống giúp trả lời thư tự động khi con người ngập trong núi email, hay lập trình phần mềm chơi cờ vây có thể thắng cả nhà vô địch thế giới, một kỳ tích từng được xem là không thể đạt được trong nhiều thập kỷ tới. Những công cụ này đã và đang gây ảnh hưởng rộng rãi tới các ngành công nghiệp và đời sống xã hội, thay đổi cách tạo ra các bộ phim, cách chẩn đoán bệnh và đóng một vài trò ngày càng tăng trong các ngành khoa học cơ bản – từ vật lý thiên văn tới sinh học.',
        see_more: { link: '', content: '' },
        quote: {
          link: 'https://d2l.aivivn.com/chapter_preface/index_vn.html',
          content: 'Trích dẫn: Đắm mình trong học sâu',
        },
        language: 'Python'
      },
      {
        id: 3,
        title: 'Computer Visions',
        content: '',
        see_more: { link: '', content: '' },
        quote: { link: '', content: '' },
        language: 'Python'
      },
      {
        id: 1,
        title: 'Machine learning',
        content:
          'Những năm gần đây, AI - Artificial Intelligence(Trí Tuệ Nhân Tạo),và cụ thể hơn là Machine Learning (Học Máy hoặc Máy Học)nổi lên như một bằng chứng của cuộc cách mạng công nghiệp lần thứ tư (1 - động cơ hơi nước, 2 - năng lượng điện, 3 - công nghệ thông tin). Trí Tuệ Nhân Tạo đang len lỏi vào mọi lĩnh vực trong đời sống mà có thể chúng ta không nhận ra. Xe tự hành của Google và Tesla, hệ thống tự tag khuôn mặt trong ảnh của Facebook, trợ lý ảo Siri của Apple, hệ thống gợi ý sản phẩm của Amazon, hệ thống gợi ý phim của Netflix, máy chơi cờ vây AlphaGo của Google DeepMind, …, chỉ là một vài trong vô vàn những ứng dụng của AI/Machine Learning.',
        see_more: {
          link: 'https://www.facebook.com/marketplace/?ref=app_tab',
          content:
            '(Xem thêm Jarvis - trợ lý thông minh cho căn nhà của Mark Zuckerberg)',
        },
        quote: {
          link: 'https://machinelearningcoban.com/2016/12/26/introduce/',
          content: 'Trích dẫn: Machine Learning cơ bản',
        },
        language: ''
      },
    ];
    return topics;
  }
  postOfTopicsData(): PostDTO[]{
    const postsOfTopics  = [{
      id: 1,
      title: 'Numpy',
      content: 'Numpy là một thư viện lõi phục vụ cho khoa học máy tính của Python, hỗ trợ cho việc tính toán các mảng nhiều chiều, có kích thước lớn, hỗ trợ các hàm đã được tối ưu áp dụng lên các mảng nhiều chiều. Numpy đặc biệt hữu ích khi thực hiện các hàm liên quan tới Đại Số Tuyến Tính. Để cài đặt numpy nếu bạn có Anaconda chỉ cần gõ',
      id_parent: 1,
      start_date: '2021/01/01',
      end_date:  '2021/01/31',
    }
    ,
    {
      id: 2,
      title: 'Pandas',
      content: 'Pandas',
      id_parent: 1,
      start_date: '2021/01/01',
      end_date:  '2021/01/31',
    }
    ,
    {
      id: 3,
      title: 'Opencv',
      content: 'Opencv',
      id_parent: 3,
      start_date: '2021/01/01',
      end_date:  '2021/01/31',
    }];
    return postsOfTopics;
  }

  languageSourceData(): LanguageDTO[] {
    const languageData = [
      {
        id: 1,
        name: 'python',
        code: 'P001'
      },
      {
        id: 2,
        name: 'java',
        code: 'J001'
      },
      {
        id: 3,
        name: 'c#',
        code: 'C001'
      }
    ];
    return languageData;
  }

  sourcesDefaultPDF(): string{
    return 'https://cors-anywhere.herokuapp.com/http://www.dblab.ntua.gr/~gtsat/collection/Java%20books/Java%20Programming%20Language%20Handbook.pdf';
  }

  iuDefaultData(): object[]{
    return [{
        id: 1,
        imgPath : 'https://cors-anywhere.herokuapp.com/https://thongtinhanquoc.com/wp-content/uploads/2020/06/image1-15.jpeg',
        content: 'I LOVE IU',
        subImgPath: 'https://cors-anywhere.herokuapp.com/https://static.mnewsvn.com/uploads/editors/47/2019/12/25/H88HtGtyLDzM0NMA8nJBQFBgAmA5z7FgXoLxx751.jpeg',
        subTitle: 'IU',
        title: 'Lovely' ,
      },
      {
        id: 2,
        imgPath : 'https://cors-anywhere.herokuapp.com/https://thongtinhanquoc.com/wp-content/uploads/2020/06/image1-15.jpeg',
        content: 'I LOVE IU',
        subImgPath: 'https://cors-anywhere.herokuapp.com/https://static.mnewsvn.com/uploads/editors/47/2019/12/25/H88HtGtyLDzM0NMA8nJBQFBgAmA5z7FgXoLxx751.jpeg',
        subTitle: 'IU',
        title: 'Lovely' ,
      }
      ,
      {
        id: 3,
        imgPath : 'https://cors-anywhere.herokuapp.com/https://thongtinhanquoc.com/wp-content/uploads/2020/06/image1-15.jpeg',
        content: 'I LOVE IU',
        subImgPath: 'https://cors-anywhere.herokuapp.com/https://static.mnewsvn.com/uploads/editors/47/2019/12/25/H88HtGtyLDzM0NMA8nJBQFBgAmA5z7FgXoLxx751.jpeg',
        subTitle: 'IU',
        title: 'Lovely' ,
      },
      {
        id: 4,
        imgPath : 'https://cors-anywhere.herokuapp.com/https://thongtinhanquoc.com/wp-content/uploads/2020/06/image1-15.jpeg',
        content: 'I LOVE IU',
        subImgPath: 'https://cors-anywhere.herokuapp.com/https://static.mnewsvn.com/uploads/editors/47/2019/12/25/H88HtGtyLDzM0NMA8nJBQFBgAmA5z7FgXoLxx751.jpeg',
        subTitle: 'IU',
        title: 'Lovely' ,
      }];
  }

  codeData(): object[]{
    return [{
      id: 1,
      title: 'MACHINE LEARNING',
      question: 'Cài đặt cuda',
      content: '',
      code: '001',
      level: 'Khó'
    },
    {
      id: 2,
      title: 'MACHINE LEARNING',
      question: 'Cài đặt cuda',
      content: '',
      code: `
      from skimage import io
      import skimage
      import matplotlib.pyplot as plt
      import cv2
      import os
      import numpy as np
      def plotnoise(img, mode,output):
          if mode is not None:
              gimg = skimage.util.random_noise(img, mode=mode)
              cv2.imwrite(output, gimg)
          else:
              plt.imshow(img)

      def noisy(noise_typ,image):
          if noise_typ == "gauss":
            row,col,ch= image.shape
          ##################
          #Noisy 2
            mean = 75
            var = 1.2
          ##########################
          #Noisy 1
          #   mean = 50
          #   var = 2
          ###########################
            sigma = var**0.5
            gauss = np.random.normal(mean,sigma,(row,col,ch))
            gauss = gauss.reshape(row,col,ch)
            noisy = image + gauss
            return noisy
          elif noise_typ == "s&p":
              row,col,ch = image.shape
              s_vs_p = 0.5
              amount = 0.004
              out = np.copy(image)
              # Salt mode
              num_salt = np.ceil(amount * image.size * s_vs_p)
              coords = [np.random.randint(0, i - 1, int(num_salt))
                      for i in image.shape]
              out[coords] = 1

              # Pepper mode
              num_pepper = np.ceil(amount* image.size * (1. - s_vs_p))
              coords = [np.random.randint(0, i - 1, int(num_pepper))
                      for i in image.shape]
              out[coords] = 0
              return out
          elif noise_typ == "poisson":
              vals = len(np.unique(image))
              vals = 2 ** np.ceil(np.log2(vals))
              noisy = np.random.poisson(image * vals) / float(vals)
              return noisy
          elif noise_typ =="speckle":
              row,col,ch = image.shape
              gauss = np.random.randn(row,col,ch)
              gauss = gauss.reshape(row,col,ch)
              noisy = image + image * gauss
              return noisy

      dir_img = "C:/Users/HP/Desktop/PYTHON_2020/image_output/"
      dir_img_out = "C:/Users/HP/Desktop/PYTHON_2020/image_output_addnoise2/"
      for filename in os.listdir(dir_img):
              image  =  dir_img+filename
              image_out  = dir_img_out  + filename
              img = cv2.imread(image)
              image_noisy = noisy("gauss",img)
              cv2.imwrite(image_out, image_noisy)
              # img = io.imread(image)
              # plotnoise(img, "localvar", r,c,2)
              # plotnoise(img, "poisson", r,c,3)
              # plotnoise(img, "salt", r,c,4)
              # plotnoise(img, "pepper", r,c,5)
              # plotnoise(img, "s&p", r,c,6)
              # plotnoise(img, "speckle", r,c,7)
              # plotnoise(img, None, r,c,8)
      `,
      level: 'Khó'
    },
    {
      id: 3,
      title: 'MACHINE LEARNING',
      question: 'Cài đặt cuda',
      content: '',
      code: `
      import cv2
      import os
      dir_img = "C:/Users/HP/Desktop/datasets/CRAB/train/images/"
      list1 = []
      for filename in os.listdir(dir_img):
          image = cv2.imread(dir_img+filename)
          height,width,channel = image.shape
          if  height!= 1536 or width != 1536:
              list1.append(filename)
          # new_height,new_width = 1536,1536
          # image_rs = cv2.resize(src=image,dsize=(new_width,new_height),interpolation=cv2.INTER_CUBIC)
          # cv2.imwrite(dir_img+filename,image_rs)
          # print("OKE")
      print(list1)`,
      level: 'Khó'
    }
  ];
  }
}
