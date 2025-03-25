import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BoycottItem, Category, Group } from '../models/flashcard.model';

@Injectable({
  providedIn: 'root',
})
export class BoycottService {
  private categories: Category[] = [
    {
      id: '1',
      name: 'OTOMOTİV',
      description: 'Araba, lastik ve araç üreticileri',
      icon: 'directions_car',
    },
    {
      id: '2',
      name: 'MEDYA',
      description: 'TV, radyo ve yayın kuruluşları',
      icon: 'tv',
    },
    {
      id: '3',
      name: 'TURİZM & OTELCİLİK',
      description: 'Otel zincirleri ve turistik işletmeler',
      icon: 'hotel',
    },
    {
      id: '4',
      name: 'PERAKENDE & YEMEK',
      description: 'Restoranlar ve alışveriş markaları',
      icon: 'restaurant',
    },
    {
      id: '5',
      name: 'İNŞAAT',
      description: 'İnşaat ve gayrimenkul şirketleri',
      icon: 'apartment',
    },
    {
      id: '6',
      name: 'HOLDİNGLER',
      description: 'Çeşitli alanlarda faaliyet gösteren gruplar',
      icon: 'business',
    },
    {
      id: '7',
      name: 'EĞİTİM',
      description: 'Eğitim kurumları',
      icon: 'school',
    },
    {
      id: '8',
      name: 'SAĞLIK',
      description: 'Sağlık sektöründe faaliyet gösteren kuruluşlar',
      icon: 'local_hospital',
    },
    {
      id: '9',
      name: 'ENERJİ (YAKIT & LPG)',
      description: 'Enerji sektöründe faaliyet gösteren kuruluşlar',
      icon: 'local_gas_station',
    },
    {
      id: '10',
      name: 'DİJİTAL SERVİSLER',
      description: 'Dijital servisler ve platformlar',
      icon: 'computer',
    },
    {
      id: '11',
      name: 'Ünlüler ve Sanatçılar',
      description: 'Ünlü kişiler ve sanatçılar',
      icon: 'star',
    },
  ];

  private groups: Group[] = [
    {
      id: '1',
      name: 'Doğuş Holding',
      description:
        "Ferit Şahenk'in sahibi olduğu Doğuş Holding, çeşitli sektörlerde faaliyet göstermektedir. Otomotiv, inşaat, medya ve turizm sektörlerindeki birçok marka bu holding altında yer almaktadır.",
    },
    {
      id: '2',
      name: 'Demirören Grubu',
      description:
        'Birçok sektörde faaliyet gösteren, özellikle medya sektöründe geniş etkiye sahip holding.',
    },
    {
      id: '3',
      name: 'Kalyon İnşaat ve Zirve Holding',
      description:
        'Özellikle İstanbul Havalimanı gibi büyük projelerde yer alan inşaat şirketi.',
    },
    {
      id: '4',
      name: 'İhlas Holding',
      description: 'Çeşitli sektörlerde faaliyet gösteren holding.',
    },
    {
      id: '5',
      name: 'Albayrak Grubu',
      description: 'Birçok sektörde faaliyet gösteren holding.',
    },
    {
      id: '6',
      name: 'Türkmedya Grubu',
      description:
        'Farklı gazete ve televizyon kanallarından oluşan medya grubu.',
    },
    {
      id: '7',
      name: 'Yeni Dünya Medya Grubu',
      description:
        'Farklı gazete ve televizyon kanallarından oluşan medya grubu.',
    },
    {
      id: '8',
      name: 'Can Holding',
      description:
        'Medya, enerji ve eğitim sektörlerinde faaliyet gösteren holding.',
    },
  ];

  private boycottItems: BoycottItem[] = [
    //#region Doğuş Holding
    {
      id: '1',
      companyName: 'Doğuş Holding',
      description:
        "Ferit Şahenk'in sahibi olduğu Doğuş Holding, çeşitli sektörlerde faaliyet göstermektedir. Otomotiv, inşaat, medya ve turizm sektörlerindeki birçok marka bu holding altında yer almaktadır.",
      categoryId: '6',
      groupId: '1',
    },
    {
      id: '2',
      companyName: 'Volkswagen Doğuş Finans (VDF)',
      description: "Doğuş Holding'in otomotiv finansman şirketi.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '3',
      companyName: 'Doğuş İnşaat',
      description: "Doğuş Holding'in inşaat sektöründeki şirketi.",
      categoryId: '5',

      groupId: '1',
    },
    {
      id: '4',
      companyName: 'NTV',
      description: 'Doğuş Medya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '1',
    },
    {
      id: '5',
      companyName: 'Star TV',
      description: 'Doğuş Medya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '1',
    },
    {
      id: '6',
      companyName: 'Nusr-Et Steakhouse',
      description:
        'Doğuş Holding bünyesindeki D.ream grubuna bağlı restoran zinciri.',
      categoryId: '4',
      groupId: '1',
    },
    {
      id: '7',
      companyName: 'D-Maris Bay',
      description: "Doğuş Grubu'nun lüks otel zinciri.",
      categoryId: '3',
      groupId: '1',
    },
    {
      id: '36',
      companyName: 'Volkswagen',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '37',
      companyName: 'Audi',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '38',
      companyName: 'Porsche',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '39',
      companyName: 'Bentley',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '40',
      companyName: 'Lamborghini',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '41',
      companyName: 'Bugatti',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '42',
      companyName: 'Seat',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '43',
      companyName: 'Scania',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '44',
      companyName: 'Tüvtürk',
      description:
        "Doğuş Holding'in otomotiv sektöründeki markaları arasında yer alır.",
      categoryId: '1',
      groupId: '1',
    },
    {
      id: '45',
      companyName: 'Kral TV',
      description: 'Doğuş Medya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '1',
    },
    {
      id: '46',
      companyName: 'Radyo Eksen',
      description: 'Doğuş Medya Grubu bünyesindeki radyo kanalı.',
      categoryId: '2',
      groupId: '1',
    },
    {
      id: '47',
      companyName: 'NTV Radyo',
      description: 'Doğuş Medya Grubu bünyesindeki radyo kanalı.',
      categoryId: '2',
      groupId: '1',
    },
    {
      id: '48',
      companyName: 'Kral FM',
      description: 'Doğuş Medya Grubu bünyesindeki radyo kanalı.',
      categoryId: '2',
      groupId: '1',
    },
    {
      id: '89',
      companyName: 'DOD',
      description: 'Doğuş Otomotiv bünyesindeki ikinci el otomotiv satışı.',
      categoryId: '1',
      groupId: '1',
    },
    //#endregion

    //#region Demirören Grubu
    {
      id: '8',
      companyName: 'Demirören Grubu',
      description:
        'Birçok sektörde faaliyet gösteren, özellikle medya sektöründe geniş etkiye sahip holding.',
      categoryId: '6',
      groupId: '2',
    },
    {
      id: '9',
      companyName: 'Hürriyet',
      description: 'Demirören Medya Grubu bünyesindeki gazete.',
      categoryId: '2',
      groupId: '2',
    },
    {
      id: '10',
      companyName: 'Milliyet',
      description: 'Demirören Medya Grubu bünyesindeki gazete.',
      categoryId: '2',
      groupId: '2',
    },
    {
      id: '11',
      companyName: 'Kanal D',
      description: 'Demirören Medya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '2',
    },
    {
      id: '12',
      companyName: 'CNN Türk',
      description: 'Demirören Medya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '2',
    },
    {
      id: '13',
      companyName: 'D-Smart',
      description:
        "Demirören Grubu'nun dijital platform ve televizyon yayın hizmeti.",
      categoryId: '2',
      groupId: '2',
    },
    {
      id: '14',
      companyName: 'Milli Piyango ve İddaa',
      description: "Demirören Grubu'nun şans oyunları işletmeleri.",
      categoryId: '6',
      groupId: '2',
    },
    {
      id: '64',
      companyName: 'Posta',
      description: 'Demirören Medya Grubu bünyesindeki gazete.',
      categoryId: '2',
      groupId: '2',
    },
    {
      id: '65',
      companyName: 'Vatan',
      description: 'Demirören Medya Grubu bünyesindeki gazete.',
      categoryId: '2',
      groupId: '2',
    },
    {
      id: '66',
      companyName: 'Fanatik',
      description: 'Demirören Medya Grubu bünyesindeki spor gazetesi.',
      categoryId: '2',
      groupId: '2',
    },
    {
      id: '63',
      companyName: 'ETS Tur',
      description: "Demirören Grubu'nun turizm şirketi.",
      categoryId: '3',
      groupId: '2',
    },
    //#endregion

    //#region Kalyon İnşaat ve Zirve Holding
    {
      id: '15',
      companyName: 'Kalyon İnşaat',
      description:
        'Özellikle İstanbul Havalimanı gibi büyük projelerde yer alan inşaat şirketi.',
      categoryId: '5',
      groupId: '3',
    },
    {
      id: '16',
      companyName: 'İstanbul Havalimanı',
      description: "Kalyon İnşaat'ın büyük projelerinden biri.",
      categoryId: '5',
      groupId: '3',
    },
    {
      id: '17',
      companyName: 'ATV',
      description: 'Kalyon-Zirve gruplarının medya yatırımlarından.',
      categoryId: '2',
      groupId: '3',
    },
    {
      id: '18',
      companyName: 'A Haber',
      description: 'Kalyon-Zirve gruplarının medya yatırımlarından.',
      categoryId: '2',
      groupId: '3',
    },
    {
      id: '67',
      companyName: 'Kalyon Enerji',
      description: "Kalyon Holding'in enerji şirketi.",
      categoryId: '6',
      groupId: '3',
    },
    //#endregion

    //#region İhlas Holding
    {
      id: '19',
      companyName: 'İhlas Holding',
      description: 'Çeşitli sektörlerde faaliyet gösteren holding.',
      categoryId: '6',
      groupId: '4',
    },
    {
      id: '20',
      companyName: 'Türkiye Gazetesi',
      description: 'İhlas Holding bünyesindeki gazete.',
      categoryId: '2',

      groupId: '4',
    },
    {
      id: '21',
      companyName: 'TGRT Haber',
      description: 'İhlas Holding bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '4',
    },
    {
      id: '22',
      companyName: 'İhlas Ev Aletleri',
      description: "İhlas Holding'in tüketici elektroniği şirketi.",
      categoryId: '4',
      groupId: '4',
    },
    {
      id: '70',
      companyName: 'İhlas Koleji',
      description:
        'Özel okul (K-12 eğitim; İhlas Eğitim Kurumları – kolej ve lise).',
      categoryId: '7',
      groupId: '4',
    },
    {
      id: '71',
      companyName: 'İhlas Hayat Hastanesi',
      description:
        'Özel tıp merkezi (İhlas’ın sağlık kuruluşu, poliklinik hizmetleri).',
      categoryId: '8',
      groupId: '4',
    },
    {
      id: '72',
      companyName: 'Ihlas Havacılık Yakıt',
      description:
        'Jet yakıtı ikmal hizmeti (İhlas’ın havacılık yakıt girişimi).',
      categoryId: '9',
      groupId: '4',
    },
    //#endregion

    //#region Albayrak Grubu
    {
      id: '23',
      companyName: 'Albayrak Grubu',
      description: 'Birçok sektörde faaliyet gösteren holding.',
      categoryId: '6',
      groupId: '5',
    },
    {
      id: '24',
      companyName: 'Yeni Şafak',
      description: "Albayrak Grubu'nun medya kuruluşu.",
      categoryId: '2',
      groupId: '5',
    },
    {
      id: '25',
      companyName: 'TVNet',
      description: "Albayrak Grubu'nun televizyon kanalı.",
      categoryId: '2',
      groupId: '5',
    },
    {
      id: '26',
      companyName: 'Tümosan',
      description: "Albayrak Grubu'nun motor ve traktör üretim şirketi.",
      categoryId: '1',
      groupId: '5',
    },
    {
      id: '70',
      companyName: 'Trabzon Limanı',
      description: "Albayrak Grubu'nun lojistik sektöründeki varlığı.",
      categoryId: '6',
      groupId: '5',
    },
    //#endregion

    //#region Türkmedya Grubu
    {
      id: '27',
      companyName: 'Türkmedya Grubu',
      description:
        'Farklı gazete ve televizyon kanallarından oluşan medya grubu.',
      categoryId: '2',
      groupId: '6',
    },
    {
      id: '28',
      companyName: 'Akşam Gazetesi',
      description: 'Türkmedya Grubu bünyesindeki gazete.',
      categoryId: '2',
      groupId: '6',
    },
    {
      id: '29',
      companyName: '24 TV',
      description: 'Türkmedya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '6',
    },
    {
      id: '69',
      companyName: '360 TV',
      description: 'Türkmedya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '6',
    },
    //#endregion

    //#region Yeni Dünya Medya Grubu
    {
      id: '30',
      companyName: 'Kanal 7',
      description: 'Yeni Dünya Medya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '7',
    },
    {
      id: '31',
      companyName: 'Ülke TV',
      description: 'Yeni Dünya Medya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '7',
    },
    {
      id: '68',
      companyName: 'Beyaz TV',
      description: 'Yeni Dünya Medya Grubu bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '7',
    },
    //#endregion

    //#region Can Holding
    {
      id: '32',
      companyName: 'Can Holding',
      description:
        'Medya, enerji ve eğitim sektörlerinde faaliyet gösteren holding.',
      categoryId: '6',
      groupId: '8',
    },
    {
      id: '33',
      companyName: 'Habertürk',
      description: 'Can Holding bünyesindeki medya kuruluşu.',
      categoryId: '2',
      groupId: '8',
    },
    {
      id: '34',
      companyName: 'Show TV',
      description: 'Can Holding bünyesindeki televizyon kanalı.',
      categoryId: '2',
      groupId: '8',
    },
    {
      id: '35',
      companyName: 'Bilgi Üniversitesi',
      description: "Can Holding'in eğitim kurumu.",
      categoryId: '6',
      groupId: '8',
    },
    {
      id: '71',
      companyName: 'Bloomberg HT',
      description: 'Can Holding bünyesindeki ekonomi kanalı.',
      categoryId: '2',
      groupId: '8',
    },
    //#endregion

    //#region Additional individual companies
    {
      id: '49',
      companyName: 'Kamil Koç',
      description: 'Otobüs firması.',
      categoryId: '1',
    },
    {
      id: '50',
      companyName: 'Lakırtı Cafe',
      description: "Ankara'da bulunan bir kafe.",
      categoryId: '4',
    },
    {
      id: '51',
      companyName: 'Mado',
      description: 'Dondurma ve tatlı zinciri.',
      categoryId: '4',
    },
    {
      id: '52',
      companyName: 'Ülker',
      description: 'Gıda ve atıştırmalık üreticisi.',
      categoryId: '4',
    },
    {
      id: '53',
      companyName: 'Kızılkayalar',
      description: 'Fast food zinciri.',
      categoryId: '4',
    },
    {
      id: '54',
      companyName: 'Simit Sarayı',
      description: 'Simit ve unlu mamüller satan kafe zinciri.',
      categoryId: '4',
    },
    {
      id: '55',
      companyName: 'Bereket Döner',
      description: 'Döner ve fast food zinciri.',
      categoryId: '4',
    },
    {
      id: '56',
      companyName: 'Glob Coffee',
      description: 'Kahve zinciri.',
      categoryId: '4',
    },
    {
      id: '57',
      companyName: 'Espressolab',
      description: 'Kahve zinciri.',
      categoryId: '4',
    },
    {
      id: '58',
      companyName: 'Dublin Cafe',
      description: "Eskişehir'de bulunan bir kafe.",
      categoryId: '4',
    },
    {
      id: '59',
      companyName: 'Super Coffee',
      description: "Ankara'da bulunan bir kafe.",
      categoryId: '4',
    },
    {
      id: '60',
      companyName: 'Kızılay',
      description: 'Yardım kuruluşu.',
      categoryId: '6',
    },
    {
      id: '61',
      companyName: 'Watsons',
      description:
        'Kozmetik ve kişisel bakım ürünleri satan perakende zinciri.',
      categoryId: '4',
    },
    {
      id: '62',
      companyName: 'D&R',
      description:
        'Kitap, müzik ve elektronik ürünler satan perakende zinciri.',
      categoryId: '4',
    },
    {
      id: '72',
      companyName: 'Ihlas Koleji',
      description:
        'Özel okul (K-12 eğitim; İhlas Eğitim Kurumları – kolej ve lise).',
      categoryId: '7',
    },
    {
      id: '73',
      companyName: 'Hasan Kalyoncu Üniversitesi',
      description: 'Vakıf üniversitesi (Gaziantep’te vakıf üniversitesi).',
      categoryId: '7',
    },
    {
      id: '74',
      companyName: 'Erdem Koleji',
      description:
        'Özel okul (Gaziantep, Kalyon Vakfı bünyesinde K-12 okulları).',
      categoryId: '7',
    },
    {
      id: '75',
      companyName: 'Ata Koleji (Ata Eğitim)',
      description:
        'Özel okul (İstanbul’da anaokulu-ilkokul-lise; Demirören ailesine ait).',
      categoryId: '7',
    },
    {
      id: '76',
      companyName: 'Sakine Kalyoncu Ozel Egitim Okulu',
      description:
        'Özel eğitim uygulama okulu (engelli çocuklar için; İstanbul).',
      categoryId: '7',
    },
    {
      id: '77',
      companyName: 'NUN Okulları',
      description:
        'Özel uluslararası okul (İstanbul, Albayrak ailesinin eğitim vakfı).',
      categoryId: '7',
    },
    {
      id: '78',
      companyName: 'Enver Oren Anadolu Lisesi',
      description:
        'Özel Anadolu lisesi (İstanbul; İhlas Holding kurucusu adına)',
      categoryId: '7',
    },
    {
      id: '79',
      companyName: 'Türkiye Hastanesi',
      description:
        'Özel genel hastane (İstanbul-Şişli’de tam teşekküllü hastane).',
      categoryId: '8',
    },
    {
      id: '80',
      companyName: 'İhlas Hayat Hastanesi',
      description:
        'Özel tıp merkezi (İhlas’ın sağlık kuruluşu, poliklinik hizmetleri).',
      categoryId: '8',
    },
    {
      id: '81',
      companyName: 'Demirören Tıp Merkezi',
      description:
        'Özel poliklinik (Demirören Grubu bünyesinde sağlık merkezi).',
      categoryId: '8',
    },
    {
      id: '82',
      companyName: 'Milangaz',
      description:
        'LPG dağıtım markası (Türkiye genelinde %9 pazar payı) Demirören Holding',
      categoryId: '9',
    },
    {
      id: '83',
      companyName: 'Likidgaz',
      description:
        'LPG markası (Milangaz bünyesinde alt marka) Demirören Holding',
      categoryId: '9',
    },
    {
      id: '84',
      companyName: 'Mutfakgaz',
      description: 'LPG markası (mutfak tüpü, evsel LPG) Demirören Holding',
      categoryId: '9',
    },
    {
      id: '85',
      companyName: 'Güneşgaz',
      description: 'LPG markası (LPG tüp dağıtımı) Demirören Holding',
      categoryId: '9',
    },
    {
      id: '86',
      companyName: 'Türkpetrol',
      description:
        'Akaryakıt istasyon zinciri markası (86 yıllık yerli akaryakıt markası) Demirören Holding',
      categoryId: '9',
    },
    {
      id: '87',
      companyName: 'Kalyon PV',
      description:
        'Güneş enerjisi paneli üretim markası (Konya Karapınar fabrikası, panel ve hücre satışı) Kalyon Holding',
      categoryId: '9',
    },
    {
      id: '88',
      companyName: 'Ihlas Havacılık Yakıt',
      description:
        'Jet yakıtı ikmal hizmeti (İhlas’ın havacılık yakıt girişimi) İhlas Holding',
      categoryId: '9',
    },
    {
      id: '90',
      companyName: 'Zubizu',
      description:
        'Mobil yaşam stili ve sadakat uygulaması (restoran, alışveriş fırsatları) - Doğuş Holding',
      categoryId: '10',
    },
    {
      id: '91',
      companyName: 'Zingat',
      description:
        'Online emlak ve gayrimenkul ilan platformu (web sitesi ve uygulama) - Doğuş Holding',
      categoryId: '10',
    },
    {
      id: '92',
      companyName: 'Mobilet',
      description:
        'Etkinlik ve konser bileti satış platformu (mobil uygulama) - Doğuş Holding',
      categoryId: '10',
    },
    {
      id: '93',
      companyName: 'Misli.com',
      description:
        'Online iddaa ve bahis platformu (spor müsabakaları ve at yarışı bahis) - Demirören Holding',
      categoryId: '10',
    },

    //#endregion Ünlüler
    {
      id: '124',
      companyName: 'Abdulkadir Polat',
      description:
        'Instagram: abdulkadirpolatinsta, Youtube: @AbdulkadirPolat1\r\n',
      categoryId: '11',
    },
    {
      id: '125',
      companyName: 'Acun Ilıcalı',
      description: 'Instagram: acunilicali',
      categoryId: '11',
    },
    {
      id: '42',
      companyName: 'Ali Biçim',
      description: 'Instagram: alibicim, Twitter: alibicim, TikTok: alibicim',
      categoryId: '11',
    },
    {
      id: '43',
      companyName: 'Asena Atalar',
      description: 'Instagram: asenatalar, Twitter: , TikTok: asenatalar',
      categoryId: '11',
    },
    {
      id: '44',
      companyName: 'Aslı Güler',
      description: 'Instagram: asliguler, Twitter: , TikTok: asliguler',
      categoryId: '11',
    },
    {
      id: '45',
      companyName: 'Atakan Özyurt',
      description:
        'Instagram: atakanozyurt, Twitter: atakannozyurt, TikTok: atakanozyurt',
      categoryId: '11',
    },
    {
      id: '46',
      companyName: 'Aydilge',
      description:
        'Instagram: aydilgeonline, Twitter: Aydilge, TikTok: aydilgeonline',
      categoryId: '11',
    },
    {
      id: '47',
      companyName: 'Ayhan Ak',
      description: 'Instagram: ayhanak, Twitter: , TikTok: ayhanaak',
      categoryId: '11',
    },
    {
      id: '50',
      companyName: 'Ayşegül Görer',
      description:
        'Instagram: ayysmakeup, Twitter: , TikTok: ayysmakeupp, 22.03.2025 - 3 reklam storysi',
      categoryId: '11',
    },
    {
      id: '51',
      companyName: 'Barış BRA',
      description: 'Instagram: barisbraa, Twitter: BARISBRA, TikTok: ',
      categoryId: '11',
    },
    {
      id: '52',
      companyName: 'Barış Murat Yağcı',
      description:
        'Instagram: barismrtyagci, Twitter: barismrtyagci, TikTok: barismuratyagci, 22.03.2025 - 1 reklam story',
      categoryId: '11',
    },
    {
      id: '55',
      companyName: 'Berika Demir',
      description:
        "Instagram: drberikademir, Twitter: , TikTok: , 4 Adet Reklam Story'si Atılmış",
      categoryId: '11',
    },
    {
      id: '56',
      companyName: 'Berk Oral',
      description: 'Instagram: berkorl, Twitter: Valesbatur, TikTok: ',
      categoryId: '11',
    },
    {
      id: '123',
      companyName: 'Berna Yıldırım',
      description: 'Instagram: bernnayll, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '57',
      companyName: 'Beyza Öztürk',
      description:
        "Instagram: 1beyzakaram, Twitter: , TikTok: 1beyzakaram, 7 Reklam Story'si",
      categoryId: '11',
    },
    {
      id: '58',
      companyName: 'Bilal Hancı',
      description:
        'Instagram: bilalhanci, Twitter: BilalHanci, TikTok: bilalhanci',
      categoryId: '11',
    },
    {
      id: '59',
      companyName: 'Burak Özdemir',
      description:
        'Instagram: cznburak, Twitter: cznburak, TikTok: cznburak, 46 gündemden alakasız story',
      categoryId: '11',
    },
    {
      id: '60',
      companyName: 'Burçe Yağmur Karabal',
      description: 'Instagram: yagmurkrbll, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '126',
      companyName: 'Buse Korkmaz',
      description: 'Instagram: busekorkmaziniz',
      categoryId: '11',
    },
    {
      id: '67',
      companyName: 'Çağla Kenanoğlu',
      description:
        'Instagram: caglakenanoglu, Twitter: , TikTok: zcaglakenanoglu',
      categoryId: '11',
    },
    {
      id: '68',
      companyName: 'Çakal',
      description: 'Instagram: cakal.95, Twitter: cakal_95, TikTok: 95cakal',
      categoryId: '11',
    },
    {
      id: '62',
      companyName: 'Cem Özkök',
      description:
        'Instagram: cemozkook, Twitter: CemOzkoktr, TikTok: cemozkook, 22.03.2025 tarihinde 25 story gündemle alakasız ve 1 adet reklam storysi',
      categoryId: '11',
    },
    {
      id: '64',
      companyName: 'Cihan Cavlak',
      description: 'Instagram: mezarci_pubg, Twitter: , TikTok: mezarci_pubg',
      categoryId: '11',
    },
    {
      id: '65',
      companyName: 'Cihan Şenso\u0308zlu\u0308',
      description:
        'Instagram: cihannaofficial, Twitter: Cihannaofficial, TikTok: ',
      categoryId: '11',
    },
    {
      id: '70',
      companyName: 'Dilan Polat',
      description:
        "Instagram: dilanpolat, Twitter: dilannpolatt, TikTok: dilanpolat, 26 Reklam Story'si",
      categoryId: '11',
    },
    {
      id: '71',
      companyName: 'Doğan Kabak',
      description:
        'Instagram: dogankabak, Twitter: dogan_kabak, TikTok: dogankabak',
      categoryId: '11',
    },
    {
      id: '72',
      companyName: 'Doğuş Çobakçor',
      description: 'Instagram: doguscabakcor, Twitter: doguscabakcor, TikTok: ',
      categoryId: '11',
    },
    {
      id: '73',
      companyName: 'Ebo',
      description:
        'Instagram: ebo, Twitter: , TikTok: ebo, 22.03.2025 https://prnt.sc/LWXLs30c0a4J',
      categoryId: '11',
    },
    {
      id: '74',
      companyName: 'Ece Ronay',
      description:
        'Instagram: eceronayofficial, Twitter: , TikTok: , https://prnt.sc/tYgTVgc_WpA7',
      categoryId: '11',
    },
    {
      id: '76',
      companyName: 'Efe Gülser',
      description: 'Instagram: iliskikocutr, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '78',
      companyName: 'Emir Furkan Orhan',
      description: 'Instagram: emirorhanz, Twitter: , TikTok: emirorhanzz',
      categoryId: '11',
    },
    {
      id: '79',
      companyName: 'Emrecan Önal',
      description: 'Instagram: emrecanonal, Twitter: , TikTok: emrecanonal',
      categoryId: '11',
    },
    {
      id: '81',
      companyName: 'Erin Şengül',
      description: 'Instagram: erinsengul, Twitter: , TikTok: erinsengul',
      categoryId: '11',
    },
    {
      id: '137',
      companyName: 'Fatih Han',
      description: 'Instagram: chef.fatihh',
      categoryId: '11',
    },
    {
      id: '82',
      companyName: 'Fatih Yasin',
      description:
        'Instagram: fatihyasinim, Twitter: fatihyasinresmi, TikTok: fatihyasin',
      categoryId: '11',
    },
    {
      id: '142',
      companyName: 'Furkan Bölükbaşı',
      description: 'https://www.youtube.com/watch?v=nA1j8DD-Q6Y',
      categoryId: '11',
    },
    {
      id: '141',
      companyName: 'Gizem Örge',
      description: 'Instagram: gizemorge\r\n',
      categoryId: '11',
    },
    {
      id: '84',
      companyName: 'Gökhan Ünver',
      description:
        'Instagram: gokhanunver, Twitter: gokhanunver, TikTok: gokhanunverben',
      categoryId: '11',
    },
    {
      id: '85',
      companyName: 'Hakan Sama',
      description:
        'Instagram: mendeburlemur, Twitter: MendeburLemur, TikTok: mendeburlemur',
      categoryId: '11',
    },
    {
      id: '87',
      companyName: 'Harun Yılmaz',
      description: 'Instagram: 1453harunn, Twitter: , TikTok: 1453harunnn',
      categoryId: '11',
    },
    {
      id: '88',
      companyName: 'Hasan Mustan',
      description:
        'Instagram: hasanmustan, Twitter: mustantsc, TikTok: mustanhasan',
      categoryId: '11',
    },
    {
      id: '136',
      companyName: 'İbrahim Yılmaz',
      description: 'Instagram: ibrahimyilmazofficial',
      categoryId: '11',
    },
    {
      id: '89',
      companyName: 'İlayda Başak',
      description: 'Instagram: ilaydabasaks, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '90',
      companyName: 'Kaan Atıcı',
      description: 'Instagram: elwind, Twitter: elwind, TikTok: elwind',
      categoryId: '11',
    },
    {
      id: '91',
      companyName: 'Kadir Alkan',
      description:
        'Instagram: kadiralkanofficial, Twitter: kadiralkanresmi, TikTok: ',
      categoryId: '11',
    },
    {
      id: '92',
      companyName: 'Kadir Ezildi',
      description:
        'Instagram: kadir_ezildi, Twitter: , TikTok: , 7 Adet Reklam Storysi',
      categoryId: '11',
    },
    {
      id: '135',
      companyName: 'Karsu Dönmez',
      description: 'Instagram: karsudonmez',
      categoryId: '11',
    },
    {
      id: '93',
      companyName: 'Mehmet Oğuzhan Özyetiş',
      description: 'Instagram: slmbnoguzhan, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '94',
      companyName: 'Melih Abuaf',
      description:
        'Instagram: melihstagram, Twitter: mabuaf, TikTok: melihagbi',
      categoryId: '11',
    },
    {
      id: '95',
      companyName: 'Melis Fis',
      description: 'Instagram: melisfis, Twitter: MelisFis, TikTok: ',
      categoryId: '11',
    },
    {
      id: '96',
      companyName: 'Mert Eren Bülbül',
      description:
        'Instagram: merterenbulbul1, Twitter: , TikTok: bulbulmerteren',
      categoryId: '11',
    },
    {
      id: '97',
      companyName: 'Mertcan Bahar',
      description: 'Instagram: mertcanbaharr, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '98',
      companyName: 'Mervan Tepelioğlu',
      description: 'Instagram: mervan, Twitter: MTepelioglu, TikTok: ',
      categoryId: '11',
    },
    {
      id: '100',
      companyName: 'Mesut Can Tomay',
      description: 'Instagram: mesutcantomay, Twitter: , TikTok: mesutcantomay',
      categoryId: '11',
    },
    {
      id: '121',
      companyName: 'MR.THE CAN',
      description: 'Instagram: mr.thecan, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '101',
      companyName: 'Murat Soner',
      description: 'Instagram: muratsoner, Twitter: muratsoner, TikTok: ',
      categoryId: '11',
    },
    {
      id: '102',
      companyName: 'Narot Çetinkaya Pekküçükyan',
      description: 'Instagram: narodcetinkaya, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '103',
      companyName: 'Nevzat Özkur',
      description: 'Instagram: nevzatozkur, Twitter: nevzatozkur0, TikTok: ',
      categoryId: '11',
    },
    {
      id: '104',
      companyName: 'Norm Ender',
      description: 'Instagram: normenderonline, Twitter: , TikTok: normender',
      categoryId: '11',
    },
    {
      id: '105',
      companyName: 'Oğuz Mehmet Berberoğlu',
      description: 'Instagram: mehmetberberoglu__, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '106',
      companyName: 'Ömer Başdoğan',
      description: 'Instagram: naletbebee, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '131',
      companyName: 'Onur Dinç',
      description: 'Instagram: khontkar',
      categoryId: '11',
    },
    {
      id: '108',
      companyName: 'Özgür Deniz Cellat',
      description: 'Instagram: cellatiniz, Twitter: , TikTok: cellat36',
      categoryId: '11',
    },
    {
      id: '109',
      companyName: 'Özlem Ada Şahin',
      description:
        'Instagram: ozlemadasahin, Twitter: , TikTok: ozlemadaasahin',
      categoryId: '11',
    },
    {
      id: '122',
      companyName: 'Özlem Altınok Öz',
      description:
        'Instagram: ozlemlinaoz, Twitter: , TikTok: , Saymaya üşendim çok reklam storysi',
      categoryId: '11',
    },
    {
      id: '112',
      companyName: 'Samet Liçina',
      description: 'Instagram: sametlicina, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '134',
      companyName: 'Şamil Oymak',
      description: 'Instagram: samiloymak',
      categoryId: '11',
    },
    {
      id: '113',
      companyName: 'Selçuk Büyük',
      description: 'Instagram: selcukbuyuk, Twitter: , TikTok: selcukbuyuk',
      categoryId: '11',
    },
    {
      id: '114',
      companyName: 'Selen Kaldırım Özyurt',
      description: 'Instagram: selenozyuurt, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '115',
      companyName: 'Sibel Yüce Önügüren',
      description:
        "Instagram: sibelofficial50bahcemden, Twitter: , TikTok: bahcemdensaziye, 7 Reklam Story'si",
      categoryId: '11',
    },
    {
      id: '117',
      companyName: 'Tuğba Öztermiyeci Bayburtluoğlu',
      description: 'Instagram: makarna_lutfen_com, Twitter: , TikTok: ',
      categoryId: '11',
    },
    {
      id: '118',
      companyName: 'Ümit Tüney',
      description: 'Instagram: umittuney1, Twitter: uemidi, TikTok: ',
      categoryId: '11',
    },
    {
      id: '119',
      companyName: 'Zeynep Demirdan',
      description: 'Instagram: demiirhaan, Twitter: , TikTok: demiirhaan',
      categoryId: '11',
    },
    {
      id: '120',
      companyName: 'Zeynep Zor',
      description: 'Instagram: zey_zor, Twitter: , TikTok: zey_zor',
      categoryId: '11',
    },
    //#endregion
  ];

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }

  getBoycottItems(): BoycottItem[] {
    return this.boycottItems;
  }

  getGroups(): Group[] {
    return this.groups;
  }

  getGroupById(groupId: string): Group | undefined {
    return this.groups.find((group) => group.id === groupId);
  }

  getBoycottItemsByCategory(
    categoryId: string | null,
    groupId?: string | null
  ): Observable<BoycottItem[]> {
    let filteredItems: BoycottItem[] = this.boycottItems;

    if (groupId) {
      filteredItems = this.boycottItems.filter(
        (item) => item.groupId === groupId
      );
    }

    if (categoryId) {
      filteredItems = filteredItems.filter(
        (item) => item.categoryId === categoryId
      );
    }
    return of(filteredItems);
  }

  searchBoycottItems(query: string): Observable<BoycottItem[]> {
    if (!query.trim()) {
      // Return all items if query is empty
      return of(this.boycottItems);
    }

    const lowercaseQuery = query.toLowerCase().trim();

    // Fuzzy search implementation
    const filteredItems = this.boycottItems.filter((item) => {
      // Check for direct matches first (most relevant)
      const companyNameLower = item.companyName.toLowerCase();
      const descriptionLower = item.description.toLowerCase();

      // Direct inclusion check - highest priority
      if (
        companyNameLower.includes(lowercaseQuery) ||
        descriptionLower.includes(lowercaseQuery)
      ) {
        return true;
      }

      // Word-level checks - second priority
      const companyWords = companyNameLower.split(/\s+/);
      const descriptionWords = descriptionLower.split(/\s+/);
      const queryWords = lowercaseQuery.split(/\s+/);

      // Check if any query word matches beginning of any company or description word
      for (const qWord of queryWords) {
        if (qWord.length < 2) continue; // Skip very short words

        // Check company name words
        for (const word of companyWords) {
          if (
            word.startsWith(qWord) ||
            (qWord.length > 3 && word.includes(qWord))
          ) {
            return true;
          }
        }

        // Check description words
        for (const word of descriptionWords) {
          if (
            word.startsWith(qWord) ||
            (qWord.length > 3 && word.includes(qWord))
          ) {
            return true;
          }
        }
      }

      // Levenshtein distance check for company name (only for queries with 3+ chars)
      if (lowercaseQuery.length >= 3) {
        // Check for edit distance for company name
        for (const word of companyWords) {
          if (
            word.length >= 4 &&
            this.levenshteinDistance(word, lowercaseQuery) <= 2
          ) {
            return true;
          }
        }
      }

      return false;
    });

    return of(filteredItems);
  }

  // Calculate Levenshtein distance between two strings
  private levenshteinDistance(a: string, b: string): number {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // Initialize matrix
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    // Fill matrix
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }
}
