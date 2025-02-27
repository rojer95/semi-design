import { id } from 'date-fns/locale';
import { Locale } from '../interface';

const local: Locale = {
    code: 'id-ID',
    dateFnsLocale: id,
    Pagination: {
        item: 'item',
        pageSize: ' item / halaman',
        page: ' halaman',
        total: '',
        jumpTo: 'Langsung ke'
    },
    Modal: {
        confirm: 'Konfirmasi',
        cancel: 'Batalkan',
    },
    TimePicker: {
        placeholder: {
            time: 'Pilih waktu',
            timeRange: 'Pilih jangkauan waktu',
        },
        begin: 'Waktu Mula',
        end: 'Waktu Akhir',
        hour: '',
        minute: '',
        second: '',
        AM: 'pagi',
        PM: 'sore',
    },
    DatePicker: {
        placeholder: {
            date: 'Pilih tanggal',
            dateTime: 'Pilih tanggal dan waktu',
            dateRange: ['Tanggal mulai', 'Tanggal akhir'],
            dateTimeRange: ['Tanggal mulai', 'Tanggal akhir'],
        },
        footer: {
            confirm: 'Konfirmasi',
            cancel: 'Batalkan',
        },
        selectDate: 'Pilih Tarikh',
        selectTime: 'Pilih Waktu',
        year: 'tahun',
        month: 'bulan',
        day: 'hari',
        monthText: '${month} ${year}',
        months: {
            1: 'Jan',
            2: 'Feb',
            3: 'Mar',
            4: 'Apr',
            5: 'Mei',
            6: 'Jun',
            7: 'Jul',
            8: 'Ags',
            9: 'Sep',
            10: 'Okt',
            11: 'Nov',
            12: 'Des',
        },
        fullMonths: {
            1: 'Januari',
            2: 'Februari',
            3: 'Maret',
            4: 'April',
            5: 'Mei',
            6: 'Juni',
            7: 'Juli',
            8: 'Agustus',
            9: 'September',
            10: 'Oktober',
            11: 'November',
            12: 'Desember',
        },
        weeks: {
            Mon: 'Sen',
            Tue: 'Sel',
            Wed: 'Rab',
            Thu: 'Kam',
            Fri: 'Jum',
            Sat: 'Sab',
            Sun: 'Min',
        },
        localeFormatToken: {
            FORMAT_SWITCH_DATE: 'dd/MM/yyyy',
        },
    },
    Popconfirm: {
        confirm: 'Konfirmasi',
        cancel: 'Batalkan',
    },
    Navigation: {
        collapseText: 'Kolapse Sidebar',
        expandText: 'Tambah Bar Sisi',
    },
    Table: {
        emptyText: 'Tidak ada Hasil',
        pageText: 'Tampilkan halaman ${currentStart} sampai ${currentEnd} dari ${total}',
    },
    Select: {
        emptyText: 'Tidak ada Hasil',
        createText: 'Buat',
    },
    Cascader: {
        emptyText: 'Tidak ada Hasil',
    },
    Tree: {
        emptyText: 'Tidak ada Hasil',
        searchPlaceholder: 'Cari',
    },
    List: {
        emptyText: 'Tidak ada Hasil',
    },
    Calendar: {
        allDay: 'Sepanjang Hari',
        AM: '${time} pagi',
        PM: '${time} sore',
        datestring: '',
        remaining: '${remained} lebih',
    },
    Upload: {
        mainText: 'Klik untuk mengunggah Berkas atau Tarik Berkas ke sini',
        illegalTips: 'Jenis berkas ini tidak didukung',
        legalTips: 'Lepaskan dan mulai mengunggah',
        retry: 'Coba ulang',
        replace: 'Ganti file',
        clear: 'Bersihkan',
        selectedFiles: 'Berkas Dipilih',
        illegalSize: 'Ukuran berkas tidak sah',
        fail: 'Pemuat naik gagal',
    },
    TreeSelect: {
        searchPlaceholder: 'Cari',
    },
    Typography: {
        copy: 'Salin',
        copied: 'Disalin',
        expand: 'Kembangkan',
        collapse: 'Kolapse',
    },
    Transfer: {
        emptyLeft: 'Tidak ada Data',
        emptySearch: 'Tidak ada hasil pencarian',
        emptyRight: 'Tidak ada isi, periksa dari kiri',
        placeholder: 'Cari',
        clear: 'Bersihkan',
        selectAll: 'Pilih Semua',
        clearSelectAll: 'Nyahpilih Semua',
        total: 'Total ${total} proyek',
        selected: '${total} item dipilih',
    },
    Form: {
        optional: '(opsional)',
    },
};

// [i18n-Indonesia(ID)]
export default local;

