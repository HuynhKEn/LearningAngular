import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewRef
} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {GLOBAL_CONSTANT} from '../../../constant/global-constant';
import {SHOP_CART} from '../../../constant/layout-constant';
import {newDateNow, numberSecondsOfDate} from '../../../helpper/date-utilities';
import {getOffset} from '../../../helpper/dom-utilities';
import {MobileService} from '../../../service/mobile.service';
import {Rotate3DProductComponent} from './rotate-3d-product/rotate-3D-product.component';

@Component({
    selector: 'app-shop-cart',
    templateUrl: './shop-cart.component.html',
    styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('imgZoomItem') imgZoomItem: ElementRef<HTMLElement>;
    @ViewChild('imageLeftShopCart') imageLeftShopCart: ElementRef<HTMLElement>;
    @ViewChild('containerShopCart') containerShopCart: ElementRef<HTMLElement>;
    @ViewChild('elementOverlayItem') elementOverlayItem: ElementRef<HTMLElement>;
    isZoom = true;
    timeout: number;
    isMobile = false;
    isScroll = false;
    isOverlay = false;
    timeTriggerZoom: any;
    posYOverLayOriginal = 0;
    ref: DynamicDialogRef;
    girdBenefitItem = '';
    girdColorProducts = '';
    sizeBuySelected: number;
    gridActionProducts = '';
    girdDetailProducts = '';
    numberBuySelected: number;
    heightOwlStageShopCart: any;
    heightImageLeftShopCart: any;
    girdColorProductsLessThanMD = '';
    sizeBuyOptions = [1, 2, 3, 4, 5, 6, 7];
    numberBuyOptions = [1, 2, 3, 4, 5, 6, 7];
    durationZoomOutAndIn: any = 99999999999999999;
    imageSrc = 'https://cf.shopee.vn/file/5ad6a28e00bff619b70edbeef966c361';
    descProduct = 'Thiết kế trẻ trung, năng động Chất liệu cao cấp bền đẹp Kiểu dáng thời trang, dễ phối đồ Màu sắt tinh tế, thanh lịch\n' +
        'Giày bốt cao cổ nam cao cấp mẫu mới phong cách hàn quốc hot trend SP362\n' +
        '\n' +
        '-Chất liệu đế: cao su\n' +
        '\n' +
        '-Chất liệu mặt giày: dệt cao cấp\n' +
        '\n' +
        '-Mầu sắc: Đen, Be\n' +
        '\n' +
        '-Form: chuẩn' + 'Thiết kế trẻ trung, năng động Chất liệu cao cấp bền đẹp Kiểu dáng thời trang, dễ phối đồ Màu sắt tinh tế, thanh lịch\n' +
        'Giày bốt cao cổ nam cao cấp mẫu mới phong cách hàn quốc hot trend SP362\n' +
        '\n' +
        '-Chất liệu đế: cao su\n' +
        '\n' +
        '-Chất liệu mặt giày: dệt cao cấp\n' +
        '\n' +
        '-Mầu sắc: Đen, Be\n' +
        '\n' +
        '-Form: chuẩn' + 'Thiết kế trẻ trung, năng động Chất liệu cao cấp bền đẹp Kiểu dáng thời trang, dễ phối đồ Màu sắt tinh tế, thanh lịch\n' +
        'Giày bốt cao cổ nam cao cấp mẫu mới phong cách hàn quốc hot trend SP362\n' +
        '\n' +
        '-Chất liệu đế: cao su\n' +
        '\n' +
        '-Chất liệu mặt giày: dệt cao cấp\n' +
        '\n' +
        '-Mầu sắc: Đen, Be\n' +
        '\n' +
        '-Form: chuẩn';

    @HostListener('wheel', ['$event'])
    onWheel() {
        this.changePositionOverlayItem();
    }

    @HostListener('window:keyup', ['$event'])
    onArrow(event: KeyboardEvent) {
        const keysPressed = [event.altKey, event.ctrlKey, event.shiftKey].every(res => !res);
        if (event && keysPressed && (event.code === 'ArrowUp' || event.code === 'ArrowDown')) {
            this.changePositionOverlayItem();
        }
    }

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef,
        public mobileService: MobileService,
        public dialogService: DialogService
    ) {
        this.girdBenefitItem = SHOP_CART.BENEFIT_ITEMS;
        this.girdColorProducts = SHOP_CART.COLOR_PRODUCTS;
        this.girdDetailProducts = SHOP_CART.DETAIL_PRODUCTS;
        this.gridActionProducts = SHOP_CART.ACTION_PRODUCTS;
        this.girdColorProductsLessThanMD = SHOP_CART.COLOR_PRODUCTS_LESS_THAN_MD;
        if (this.mobileService.checkMobile()) {
            this.isMobile = true;
            this.girdDetailProducts = SHOP_CART.DETAIL_PRODUCTS_MOBILE;
            document.documentElement.style.setProperty('--dynamic-instanceArrow', '-8%');
        }
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.heightImageLeftShopCart = this.imageLeftShopCart.nativeElement.offsetHeight;
        this.heightOwlStageShopCart = document.querySelectorAll('.owl-stage-outer')[0].clientHeight;
        document.documentElement.style.setProperty('--dynamic-imageSourceOverlay', `url(${this.imageSrc})`);
        document.documentElement.style.setProperty('--dynamic-overlayClientHeightShopCart', String(this.heightImageLeftShopCart) + 'px');
        this.posYOverLayOriginal = getOffset(this.containerShopCart.nativeElement).top + 15.875;
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }

    rotate3D(): void {
        this.ref = this.dialogService.open(Rotate3DProductComponent, {
        header: 'Rotate 3D Images',
        width: '50%',
        contentStyle: {'max-height': '500px', overflow: 'auto', padding: 0},
        baseZIndex: 10000,
        });
    }

    zoomInProduct(event) {
        this.imageLeftShopCart.nativeElement.style.cursor = 'zoom-in';
        if (this.durationZoomOutAndIn === GLOBAL_CONSTANT.VALUE_MAKE_CONDITION || (numberSecondsOfDate(newDateNow()) - this.durationZoomOutAndIn > 0.2)) {
            this.imgZoomItem.nativeElement.style.border = `${GLOBAL_CONSTANT.STYLE.BORDER_MAIN_2PX}`;
            this.elementOverlayItem.nativeElement.style.border = `${GLOBAL_CONSTANT.STYLE.BORDER_MAIN_2PX}`;
            const posY = event.offsetY ? (event.offsetY) : event.pageY - this.imgZoomItem.nativeElement.offsetTop;
            const posX = event.offsetX ? (event.offsetX) : event.pageX - this.imgZoomItem.nativeElement.offsetLeft;
            this.elementOverlayItem.nativeElement.style.backgroundPosition = (-posX) * 2 + 'px ' + (-posY) * 2  + 'px';
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.cdr.detectChanges();
            }
            this.isOverlay = true;
        }
    }

    zoomOutProduct() {
        this.imgZoomItem.nativeElement.style.border = `none`;
        this.imageLeftShopCart.nativeElement.style.cursor = 'default';
        this.elementOverlayItem.nativeElement.style.marginTop = 0 + 'px';
        this.durationZoomOutAndIn = numberSecondsOfDate(newDateNow());
        if (this.cdr && !(this.cdr as ViewRef).destroyed) {
            this.cdr.detectChanges();
        }
        this.isOverlay = false;
    }

    changePositionOverlayItem() {
        if (this.isZoom) {
            this.isScroll = true;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                const posYOverLayOriginal = getOffset(this.containerShopCart.nativeElement).top;
                if (posYOverLayOriginal < -50 && posYOverLayOriginal !== this.posYOverLayOriginal) {
                    this.elementOverlayItem.nativeElement.style.marginTop = Math.abs(this.posYOverLayOriginal + posYOverLayOriginal) + this.posYOverLayOriginal + 70 + 'px';
                } else {
                    if (posYOverLayOriginal > -32 && posYOverLayOriginal < 6) {
                        this.elementOverlayItem.nativeElement.style.marginTop = 75 + 'px';
                    } else {
                        this.elementOverlayItem.nativeElement.style.marginTop = 0 + 'px';
                    }
                }
                if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                    this.cdr.detectChanges();
                }
                this.isScroll = false;
            }, 250);
        }
    }

    onTurnZoom() {
        this.isZoom = !this.isZoom;
        this.isOverlay = false;
    }
}
